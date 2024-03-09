import Text from "@/src/components/Text";
import routes from "@/src/constants/routes";
import { useRouter } from "expo-router";
import { View } from "react-native";

const Following = () => {
  const router = useRouter();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Following</Text>
    </View>
  );
};

export default Following;
