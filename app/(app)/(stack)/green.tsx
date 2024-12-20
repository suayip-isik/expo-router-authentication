import { Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const GreenScreen = () => {
  return (
    <View>
      <Text>This is the green screen</Text>
      <Text onPress={() => router.push("/(app)/(stack)/blue")}>
        Go to blue screen
      </Text>
      <Text onPress={() => router.dismissTo("/(app)/(tabs)")}>
        Back to home screen
      </Text>
      <Text onPress={() => router.dismissTo("/(app)/(tabs)/explore")}>
        Back to explore screen
      </Text>
    </View>
  );
};

export default GreenScreen;
