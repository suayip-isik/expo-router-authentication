import { useSession } from "@/context";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={styles.page}>
      <Text
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/(app)/(tabs)");
        }}
      >
        Sign In
      </Text>
      <Text onPress={() => router.navigate("/sign-up")}>Sign Up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
});
