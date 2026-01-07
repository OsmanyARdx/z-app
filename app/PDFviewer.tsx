import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, StyleSheet, View,Platform } from "react-native";
import { WebView } from "react-native-webview";
import Pdf from "react-native-pdf";



export default function PDFViewer() {
  
  const [isLoading, setIsLoading] = useState(true);

  const source = 'https://enos.itcollege.ee/~japoia/algorithms/GT/Data-Structures-and-Algorithms-in-Java-6th-Edition.pdf';
        

  const googleViewerUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(
    source
  )}`;

  


  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleViewerUrl }}
        style={styles.pdf}
        onLoadEnd={() => {
          console.log("PDF loaded");
          setIsLoading(false);
        }}
        onError={() => setIsLoading(false)}
      />

      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  pdf: {
    flex: 1,
    marginTop: 20,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
});
