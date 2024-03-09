import Text from "@/src/components/Text";
import routes from "@/src/constants/routes";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

const AddUser = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { id, other } = params;

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Stack.Screen
        options={{
          animation: "slide_from_bottom",
        }}
      />
      <Text>{id}</Text>
      <Text>{other}</Text>
    </View>
  );
};

export default AddUser;
