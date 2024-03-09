import Text from "@/src/components/Text";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Tab() {
  const router = useRouter();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Settings Page</Text>

      <Text onPress={() => router.navigate("modal")}>Go To Modal</Text>
    </View>
  );
}
