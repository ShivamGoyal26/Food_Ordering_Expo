import CustomHeader from "@/src/components/CustomHeader";
import React, { useMemo } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { useRouter } from "expo-router";

// Files
import { getScreenHeight } from "@/src/utils/dimensions";
import { ColorTheme, Theme } from "@/src/theme";
import { Back } from "@/src/constants/svg";
import fonts from "@/src/constants/fonts";
import Text from "@/src/components/Text";

const Login = () => {
  const theme = useTheme<Theme>();
  const router = useRouter();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <SafeAreaView edges={["top"]} style={styles.screen}>
      <View style={styles.screen}>
        <CustomHeader
          leftAction={{ pathname: "/signup", params: { name: "Bacon" } }}
          leftIcon={
            <Back
              fill={colors.mainForeground}
              height={getScreenHeight(3)}
              width={getScreenHeight(3)}
            />
          }
          title="Login"
        />
        <View style={styles.content}>
          <Pressable onPress={() => router.replace("/(home)/(tabs)/users/")}>
            <Text style={styles.title}>Get In</Text>
          </Pressable>
        </View>
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
    title: {
      fontFamily: fonts.regular,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default Login;
