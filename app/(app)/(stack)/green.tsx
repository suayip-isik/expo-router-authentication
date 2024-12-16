import { Button, Text, View } from "react-native";
import React from "react";
import { Redirect, useRouter } from "expo-router";

const GreenScreen = () => {
  const router = useRouter();
  return (
    <View>
      <Text>This is the green screen</Text>
      <Text onPress={() => router.push("/(app)/(tabs)")}>
        Go to blue screen
      </Text>
      <Button
        title="Go to blue screen"
        onPress={() => <Redirect href="/(app)/(tabs)/explore" />}
      />
    </View>
  );
};

export default GreenScreen;
