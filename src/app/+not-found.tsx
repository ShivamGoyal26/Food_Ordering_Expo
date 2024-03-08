import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "@shopify/restyle";
import { useMemo } from "react";
import { ColorTheme, Theme } from "../theme";
import { Link } from "expo-router";

const NotFound = () => {
  const theme = useTheme<Theme>();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Requested content not found</Text>
      <Link href={"/"}>
        <Text style={styles.title}>GO Home</Text>
      </Link>
    </View>
  );
};

const createStyles = (theme: ColorTheme) =>
  StyleSheet.create({
    screen: {
      backgroundColor: theme.mainBackground,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: theme.mainForeground,
    },
  });

export default NotFound;
