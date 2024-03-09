import Text from "@/src/components/Text";
import routes from "@/src/constants/routes";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Tab() {
  const router = useRouter();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text onPress={() => router.navigate(routes.USERS)}>Home Page</Text>
      <Text onPress={() => router.navigate(routes.USERS)}>Go To Users</Text>
    </View>
  );
}
