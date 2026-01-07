import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import React from "react";
import { Button, SectionList, StyleSheet, View } from "react-native";





export default function AppCenterScreen() {
  

  const DATA = [
    {
      title: "Common Functions",
      data: ["Trouble Codes", "In-depth check", "Live Data"],
    },
    {
      title: "Diagnostic Test",
      data: ["Smog Check", "Battery Check"],
    },
    {
      title: "DIY",
      data: ["Custom Dash", "Trip Management"],
    },
    {
      title: "INFO",
      data: ["Owner's Manual"],
    },
  ];

  // Function to handle navigation based on button pressed
  const whichScreen = (name: string) => {
    switch (name) {
      case "Trouble Codes":
        console.log(`Navigating to Trouble Codes Screen`);
        break;
      case "In-depth check":
        console.log(`Navigating to In-depth Check Screen`);
        break;
      case "Live Data":
        console.log(`Navigating to Live Data Screen`);
        break;
      case "Smog Check":
        console.log(`Navigating to Smog Check Screen`);
        break;
      case "Battery Check":
        console.log(`Navigating to Battery Check Screen`);
        break;
      case "Custom Dash":
        console.log(`Navigating to Custom Dash Screen`);
        break;
      case "Trip Management":
        console.log(`Navigating to Trip Management Screen`);
        break;

      case "Owner's Manual":
      router.push("/PDFviewer");

      
        break;

      default:
        console.log(`No screen found`);

        break;
    }
  };

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
                onPress={() => whichScreen(item)}
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
    backgroundColor: "rgba(50,50,50,1)",
  },
  text: {
    fontSize: 42,
    padding: 12,
    color: "rgba(255, 255, 255, 1)",
  },
  roundedView: {
    flex: 1,
    backgroundColor: "rgba(0, 171, 193, 1)",
    borderRadius: 10,
    padding: 5,
  },
});
