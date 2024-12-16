import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Login Screen" }} />
      <Stack.Screen name="sign-up" options={{ title: "Sign Up Screen" }} />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
