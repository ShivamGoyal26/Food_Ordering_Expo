import { Link } from "expo-router";
import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useTheme } from "@shopify/restyle";

// Files
import { getScreenHeight } from "../utils/dimensions";
import { ColorTheme, Theme } from "../theme";
import fonts from "../constants/fonts";

type CustomHeaderProps = {
  title: string;
  leftIcon: any;
  leftAction: any;
};

const CustomHeader = ({ title, leftIcon, leftAction }: CustomHeaderProps) => {
  const theme = useTheme<Theme>();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.screen}>
      {leftIcon ? (
        <Link asChild href={leftAction}>
          <Pressable style={styles.actionButton}>{leftIcon}</Pressable>
        </Link>
      ) : (
        <View style={styles.actionButton} />
      )}

      <View style={styles.middleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.actionButton} />
    </View>
  );
};

const createStyles = (theme: ColorTheme) =>
  StyleSheet.create({
    screen: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: getScreenHeight(10),
    },

    title: {
      color: theme.mainForeground,
      fontFamily: fonts.medium,
    },

    actionButton: {
      width: "10%",
      height: getScreenHeight(10),
      justifyContent: "center",
      alignItems: "center",
    },
    middleContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default CustomHeader;
