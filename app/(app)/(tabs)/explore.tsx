import { StyleSheet, View, Text } from "react-native";
export default function TabTwoScreen() {
  return (
    <View style={styles.page}>
      <Text>This is the explore page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
