import Text from "@/src/components/Text";
import { useRouter } from "expo-router";
import { View } from "react-native";

const Users = () => {
  const router = useRouter();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text onPress={() => router.push("/(home)/(tabs)/users/adduser")}>
        Users
      </Text>
    </View>
  );
};

export default Users;
