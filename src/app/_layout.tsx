import { Redirect, Stack, useSegments } from "expo-router";
import { ThemeProvider } from "@shopify/restyle";
import { ActivityIndicator, useColorScheme } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

// Files
import { darkTheme, theme } from "../theme";
import routes from "../constants/routes";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [auth, setAuth] = useState(false);

  const [appIsReady, setAppIsReady] = useState(false);

  console.log("Main Layout");

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          Poppins_300Light,
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_600SemiBold,
          Poppins_700Bold,
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        SplashScreen.hideAsync();
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const colorScheme = useColorScheme();

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={colorScheme === "light" ? theme : darkTheme}>
      <StatusBar
        style={colorScheme === "light" ? "dark" : "light"}
        backgroundColor="red"
      />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="modal" options={{ presentation: "modal" }} /> */}
      </Stack>
      {auth ? (
        <Redirect href={"/(home)/(tabs)/users"} />
      ) : (
        <Redirect href={routes.LOGIN} />
      )}
    </ThemeProvider>
  );
}
