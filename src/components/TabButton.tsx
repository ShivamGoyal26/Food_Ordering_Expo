import Text from "@/src/components/Text";
import { Theme } from "@/src/theme";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const TabButton = (props: any) => {
  const { item, accessibilityState, onPress } = props;
  const focused = accessibilityState.selected;
  const theme = useTheme<Theme>();
  const { colors } = theme;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        {/* {item.badges ? <View style={{}}></View> : null} */}
        <FontAwesome
          name={item.icon}
          size={20}
          color={focused ? colors.primaryCardBackground : colors.borderColor}
        />
      </View>
      <Text variant="title">{item.label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabButton;
