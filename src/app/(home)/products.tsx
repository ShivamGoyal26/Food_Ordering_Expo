import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const ProductsRoute = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProductsRoute</Text>
    </View>
  );
};

export default ProductsRoute;
