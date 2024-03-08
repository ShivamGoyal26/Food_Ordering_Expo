import CustomHeader from "@/src/components/CustomHeader";
import React, { useMemo } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";

// Files
import Back from "@/assets/svg/back.svg";
import { getScreenHeight, getScreenWidth } from "@/src/utils/dimensions";
import { ColorTheme, Theme } from "@/src/theme";

const Login = () => {
  const theme = useTheme<Theme>();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <SafeAreaView edges={["top"]} style={styles.screen}>
      <View style={styles.screen}>
        <CustomHeader
          leftAction={{ pathname: "/details", params: { name: "Bacon" } }}
          leftIcon={
            <Back
              fill={colors.mainForeground}
              height={getScreenHeight(3)}
              width={getScreenHeight(3)}
            />
          }
          title="Login"
        />
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const createStyles = (theme: ColorTheme) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.mainBackground,
    },
  });

export default Login;
