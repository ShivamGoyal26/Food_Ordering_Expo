import React from "react";
import { Tabs } from "expo-router";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/src/theme";
import { getScreenHeight } from "@/src/utils/dimensions";
import TabButton from "@/src/components/TabButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  const theme = useTheme<Theme>();
  const { colors } = theme;
  const screens = [
    {
      name: "users",
      label: "Users",
      icon: "user",
      badges: 0,
      hide: false,
      id: 2,
    },
    {
      name: "settings",
      label: "Settings",
      icon: "cog",
      badges: 0,
      hide: null,
      id: 2,
    },
  ];

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {screens.map((screen) => {
        return (
          <Tabs.Screen
            key={screen.id}
            name={screen.name}
            options={{
              tabBarStyle: {
                backgroundColor: colors.mainBackground,
                height: getScreenHeight(8),
                borderTopWidth: 1,
                width: "100%",
                alignSelf: "center",
                // borderRadius: 60,
                padding: 0,
                // borderTopColor: colors.primaryCardText,
              },
              title: screen.label,
              tabBarButton: (props) =>
                screen.hide ? null : <TabButton {...props} item={screen} />,
            }}
          />
        );
      })}
    </Tabs>
  );
}
