import { StyleSheet, Text, View } from "react-native";
import React from "react";

const signUp = () => {
  return (
    <View style={styles.page}>
      <Text>This is the sign up page</Text>
    </View>
  );
};

export default signUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
