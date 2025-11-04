import { StyleSheet, View } from 'react-native';


import React from 'react';
import {
  GaugeBattery,
  GaugeSpeedometer,
  GaugeTachometer
} from 'react-native-vehicle-gauges';

export default function HomeScreen() {
  const [speed, setSpeed] = React.useState(10);
  const [rpm, setRpm] = React.useState(3500);
  const [voltage, setVoltage] = React.useState(12.6);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GaugeSpeedometer
        speed={speed}
        maxSpeed={180}
        redlineSpeed={140}
        units="mph"
        size={{ width: 300, height: 300 }}
      />

      <GaugeTachometer
        rpm={rpm}
        maxRpm={8000}
        redlineRpm={6500}
        size={{ width: 300, height: 300 }}
      />

      <GaugeBattery
        voltage={voltage}
        lowVoltage={12.0}
        size={{ width: 300, height: 150 }}
      />
    </View>
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
  homeLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
