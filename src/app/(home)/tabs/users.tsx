import Text from "@/src/components/Text";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Tab() {
  const router = useRouter();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>USERS PAGE</Text>
      <Text onPress={() => router.back()}>Go Back</Text>
    </View>
  );
}
