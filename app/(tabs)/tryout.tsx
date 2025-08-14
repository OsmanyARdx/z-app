
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';

import * as NavigationBar from 'expo-navigation-bar';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
    const visibility = NavigationBar.useVisibility()
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/car.jpg')}
                    style={styles.carLogo}
                />
            }>
            <NavigationBar type="subtitle">The Nissan Z</NavigationBar>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">The Nissan Z</ThemedText>
                <ThemedText>
                    Modern app to <ThemedText type="defaultSemiBold">diagnose</ThemedText> the Z.
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    carLogo: {
        height: '100%',
        width: '100%',
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
