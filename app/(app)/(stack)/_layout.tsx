import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
};

export default StackLayout;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
