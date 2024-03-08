import { View, Text } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

export default function Details() {
  const router = useRouter();
  const params = useLocalSearchParams();
  console.log("Detail screen", router);
  console.log("Params", params);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Stack.Screen
        options={{
          title: params.name,
        }}
      /> */}
      <Text
        onPress={() => {
          // router.setParams({ name: "Updated" });
          router.back();
        }}
      >
        Update the title
      </Text>
    </View>
  );
}
