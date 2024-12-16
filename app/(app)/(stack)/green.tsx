import { Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const GreenScreen = () => {
  const router = useRouter();
  return (
    <View>
      <Text>This is the green screen</Text>
      <Text onPress={() => router.dismissTo("/(app)/(tabs)")}>
        Go to blue screen
      </Text>
    </View>
  );
};

export default GreenScreen;
