import { Stack } from "expo-router";
import { ThemeProvider } from "@shopify/restyle";
import { useColorScheme } from "react-native";

// Files
import { darkTheme, theme } from "../theme";

export default function Layout() {
  const colorScheme = useColorScheme();
  console.log("colorScheme", colorScheme);
  return (
    <ThemeProvider theme={colorScheme === "light" ? theme : darkTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ThemeProvider>
  );
}
