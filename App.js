import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { bootstrap } from "./src/bootstrap";
import { AppNavigation } from "./src/navigation/AppNavigation";
import AppLoading from "expo-app-loading";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <AppNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "open-bold",
  },
});
