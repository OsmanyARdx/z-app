import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, TextInput, View } from 'react-native';

import { MaintenanceLog, useMaintenanceLogs } from '@/app/func/log_func';

// Key for SecureStore
const CAR_IMAGE_URI_KEY = 'carImageUri';

export default function CarLogsScreen() {
    const { logEntries, addLogEntry } = useMaintenanceLogs();
    const [description, setDescription] = useState('');
    const [miles, setMiles] = useState('');
    const [date, setDate] = useState('');
    const [carImageUri, setCarImageUri] = useState<string | null>(null);

    // Load saved image URI on component mount
    useEffect(() => {
        const loadSavedImageUri = async () => {
            try {
                const savedUri = await SecureStore.getItemAsync(CAR_IMAGE_URI_KEY);
                if (savedUri) {
                    setCarImageUri(savedUri);
                }
            } catch (error) {
                console.error('Failed to load image URI from SecureStore:', error);
            }
        };
        loadSavedImageUri();
    }, []);

    const handleAddLog = () => {
        addLogEntry({ description, miles, date });
        setDescription('');
        setMiles('');
        setDate('');
    };

    const pickImage = async () => {
        // Request media library permissions
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission required', 'Please enable media library access in your phone settings to select an image.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setCarImageUri(uri);
            // Save the URI for future sessions
            try {
                await SecureStore.setItemAsync(CAR_IMAGE_URI_KEY, uri);
            } catch (error) {
                console.error('Failed to save image URI to SecureStore:', error);
            }
        }
    };

    const renderLogItem = ({ item }: { item: MaintenanceLog }) => (
        <ThemedView style={styles.logItemContainer}>
            <ThemedText style={styles.logDescription}>{item.description}</ThemedText>
            <ThemedText style={styles.logMiles}>{item.miles}</ThemedText>
            <ThemedText style={styles.logDate}>{item.date}</ThemedText>
        </ThemedView>
    );

    const ListHeader = (
        <View>
            <View style={styles.imageContainer}>
                <Image
                    source={carImageUri ? { uri: carImageUri } : require('@/assets/images/car.jpg')}
                    style={styles.carLogo}
                />
            </View>
            <View style={styles.changeImageButtonContainer}>
                <Button title="Change Car Image" color={"rgba(50, 50, 50, 1)"} onPress={pickImage} />
            </View>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Maintenance Log</ThemedText>
            </ThemedView>
            <ThemedView style={styles.headerContainer}>
                <ThemedText style={[styles.logDescription, styles.headerText]}>Maintenance/Upgrades</ThemedText>
                <ThemedText style={[styles.logMiles, styles.headerText]}>Miles</ThemedText>
                <ThemedText style={[styles.logDate, styles.headerText]}>Date</ThemedText>
            </ThemedView>
        </View>
    );

    const ListFooter = (
        <View style={styles.inputFormContainer}>
            <ThemedText style={styles.sectionHeader}>Add New Log Entry</ThemedText>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
                placeholder="Description"
            />
            <TextInput
                style={styles.input}
                value={miles}
                onChangeText={setMiles}
                placeholder="Miles (optional)"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                value={date}
                onChangeText={setDate}
                placeholder="Date (e.g., MM/DD/YYYY)"
            />
            <Button title="Add Log" onPress={handleAddLog} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={logEntries}
                keyExtractor={(item, index) => `${item.description}-${index}`}
                renderItem={renderLogItem}
                ListHeaderComponent={ListHeader}
                ListFooterComponent={ListFooter}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        height: 250,
        overflow: 'hidden',
    },
    carLogo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    changeImageButtonContainer: {
        padding: 10,
    },
    stepContainer: {
        gap: 8,
        padding: 20,
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontWeight: 'bold',
    },
    logItemContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    logDescription: {
        flex: 2,
    },
    logMiles: {
        flex: 1,
        textAlign: 'center',
    },
    logDate: {
        flex: 1.2,
        textAlign: 'right',
    },
    inputFormContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        textDecorationColor: 'rgba(255,255,255,1)',
    },
});