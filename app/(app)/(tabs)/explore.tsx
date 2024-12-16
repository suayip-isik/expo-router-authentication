import { useRouter } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";
export default function TabTwoScreen() {
  const router = useRouter();
  return (
    <View style={styles.page}>
      <Text>This is the explore page</Text>
      <Button
        title="Go to red screen"
        onPress={() => router.push("/(app)/(stack)/red")}
      />
      <Button
        title="Go to blue screen"
        onPress={() => router.push("/(app)/(stack)/blue")}
      />
      <Button
        title="Go to green screen"
        onPress={() => router.push("/(app)/(stack)/green")}
      />
      <Button
        title="Go to orange screen"
        onPress={() => router.push("/(app)/(stack)")}
      />
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
