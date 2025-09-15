import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { Button, SectionList, StyleSheet, View } from 'react-native';

export default function AppCenterScreen() {

  const DATA = [
    {
      title: 'Common Functions',
      data: ['Trouble Codes', 'In-depth check', 'Live Data'],
    },
    {
      title: 'Diagnostic Test',
      data: ['Smog Check', 'Battery Check'],
    },
    {
      title: 'DIY',
      data: ['Custom Dash', 'Trip Management'],
    }
  ];
  return (
    <ThemedView style={styles.container}>
      <View style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Button
                title={item}
                color={"rgba(50, 50, 50, 1)"}
                onPress={() => console.log(`pressed`)}
              />
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <ThemedText>{title}</ThemedText>
          )}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  scrollView: {
    backgroundColor: 'rgba(50,50,50,1)',
  },
  text: {
    fontSize: 42,
    padding: 12,
    color: 'rgba(255, 255, 255, 1)'
  },
  roundedView: {
    flex: 1,
    backgroundColor: 'rgba(0, 171, 193, 1)',
    borderRadius: 10,
    padding: 5,
  }
});
