import Text from "@/src/components/Text";
import { ColorTheme, Theme } from "@/src/theme";
import { useTheme } from "@shopify/restyle";
import { Link, useRouter } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";

const Users = () => {
  const theme = useTheme<Theme>();
  const router = useRouter();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.screen}>
      <Link
        href={{
          pathname: "/(home)/(tabs)/users/adduser",
          params: { id: 86, other: "anything you want here" },
        }}
      >
        <Text>Users</Text>
      </Link>
    </View>
  );
};

const createStyles = (theme: ColorTheme) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.mainBackground,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default Users;
