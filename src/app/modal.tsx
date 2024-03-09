import Text from "@/src/components/Text";
import routes from "@/src/constants/routes";
import { Stack, useRouter } from "expo-router";
import { View } from "react-native";

const Followers = () => {
  const router = useRouter();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Modal</Text>
      <Text onPress={() => router.back()}>Go Back</Text>
    </View>
  );
};

export default Followers;
