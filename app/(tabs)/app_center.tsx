import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function AppCenterScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.container}>
        <ThemedText>Hi</ThemedText>
      </View>
      <View style={styles.container}>
        <ThemedText>Hi</ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  scrollView: {
    backgroundColor: 'rgba(50,50,50,1)',
  },
  text: {
    fontSize: 42,
    padding: 12,
    color: 'rgba(255, 255, 255, 1)'
  }
});
