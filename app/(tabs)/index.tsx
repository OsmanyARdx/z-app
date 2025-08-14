import { Image } from 'expo-image';
import { Alert, Button, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to the Z App!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Connect to your Z</ThemedText>
        <ThemedText>
          Connect to the port on the 300zx typically located under the steering column.
          Once connected click the{' '}
          <ThemedText type="defaultSemiBold">
            link
          </ThemedText> button below.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Diagnosis</ThemedText>
        <ThemedText>
          {`Once connected you can run diagnostics in the Diag tab, or display sensor outputs.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Document your work</ThemedText>
        <ThemedText>
          {`You can also use this app to document the work comepleted to the car: `}
        </ThemedText>
      </ThemedView>
      <Button
        title="Link"
        color={"rgba(50, 50, 50, 1)"}
        onPress={() => Alert.alert('Simple Button pressed')}
      />
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
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
