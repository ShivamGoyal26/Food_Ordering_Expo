import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const HomeRoute = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Page</Text>
    </View>
  );
};

export default HomeRoute;
