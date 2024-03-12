import CustomHeader from "@/src/components/CustomHeader";
import React, { useMemo, useRef, useState } from "react";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { useRouter } from "expo-router";

// Files
import { getScreenHeight } from "@/src/utils/dimensions";
import { ColorTheme, Theme } from "@/src/theme";
import { Back } from "@/src/constants/svg";
import fonts from "@/src/constants/fonts";
import Text from "@/src/components/Text";
import CustomDropDown from "@/src/components/CustomDropDown";
import NetworkStats from "@/src/components/NetworkStats";
import AccelerometerStats from "@/src/components/AccelerometerStats";
import useToggle from "@/src/hooks/useToggle";
import ImagePicker from "@/src/components/ImagePicker";
import CustomDocumentPicker from "@/src/components/DocumentPicker";

const Login = () => {
  const theme = useTheme<Theme>();
  const router = useRouter();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  const [open, setOpen] = useState(false);
  const textRef = useRef(null);

  const dimissModal = () => {
    setOpen(false);
  };

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
        <Text>Login</Text>

        <CustomDropDown
          textRef={textRef}
          overlay={true}
          dimissModal={dimissModal}
          visible={open}
        >
          <Pressable ref={textRef} onPress={() => setOpen((pre) => !pre)}>
            <Text>DropDown test</Text>
          </Pressable>
        </CustomDropDown>

        <ScrollView>
          <View style={{ height: getScreenHeight(2) }} />
          <NetworkStats />
          <View style={{ height: getScreenHeight(2) }} />
          {/* <AccelerometerStats /> */}
          <View style={{ height: getScreenHeight(2) }} />
          {/* <ImagePicker /> */}
          <View style={{ height: getScreenHeight(2) }} />
          <CustomDocumentPicker />
          <View style={{ height: getScreenHeight(2) }} />
        </ScrollView>
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
