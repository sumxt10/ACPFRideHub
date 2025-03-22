import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import LoginPage from "./components/LoginPage"; // Import the LoginPage component

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginPage /> {/* Render your LoginPage here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
