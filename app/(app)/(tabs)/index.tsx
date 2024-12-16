import { View, Text } from "react-native";
import { useSession } from "@/context";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
          router.replace("/(auth)");
        }}
      >
        Sign Out
      </Text>
      <Text onPress={() => router.push("/(app)/(stack)/red")}>Explore</Text>
    </View>
  );
}
