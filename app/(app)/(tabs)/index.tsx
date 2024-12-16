import { View, Text, StyleSheet, Button } from "react-native";
import { useSession } from "@/context";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const { signOut } = useSession();
  return (
    <View style={styles.page}>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
          router.replace("/(auth)");
        }}
      >
        Sign Out
      </Text>
      <Button
        title="Go to red screen"
        onPress={() => router.navigate("/(app)/(stack)/red")}
      />
      <Button
        title="Go to blue screen"
        onPress={() => router.navigate("/(app)/(stack)/blue")}
      />
      <Button
        title="Go to green screen"
        onPress={() => router.navigate("/(app)/(stack)/green")}
      />
      <Button
        title="Go to orange screen"
        onPress={() => router.navigate("/(app)/(stack)")}
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
