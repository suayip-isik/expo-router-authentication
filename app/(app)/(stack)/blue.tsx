import { Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const BlueScreen = () => {
  return (
    <View>
      <Text>This is the blue screen</Text>
      <Text onPress={() => router.dismissTo("/(app)/(tabs)")}>
        Back to home screen
      </Text>
    </View>
  );
};

export default BlueScreen;
