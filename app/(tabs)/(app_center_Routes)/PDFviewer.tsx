import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PDFViewer() {
  const pdfUrl =
    'https://enos.itcollege.ee/~japoia/algorithms/GT/Data-Structures-and-Algorithms-in-Java-6th-Edition.pdf';

  // Wrap PDF URL with Google Docs Viewer
  const googleViewerUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(pdfUrl)}`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleViewerUrl }}
        style={styles.pdf}
        onLoadEnd={() => console.log('PDF loaded')}
        onError={(e) => console.error('Failed to load PDF', e.nativeEvent)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
