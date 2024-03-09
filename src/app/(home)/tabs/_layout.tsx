import React from "react";
import { Tabs } from "expo-router";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/src/theme";
import { getScreenHeight } from "@/src/utils/dimensions";
import TabButton from "@/src/components/TabButton";

export default function TabLayout() {
  const theme = useTheme<Theme>();
  const { colors } = theme;
  const screens = [
    {
      name: "index",
      label: "Home",
      icon: "home",
      badges: 2,
      hide: null,
      id: 1,
    },
    {
      name: "settings",
      label: "Settings",
      icon: "cog",
      badges: 0,
      hide: null,
      id: 2,
    },
    {
      name: "users",
      label: "Users",
      icon: "cog",
      badges: 0,
      hide: true,
      id: 2,
    },
  ];

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "red", headerShown: false }}>
      {screens.map((screen) => {
        return (
          <Tabs.Screen
            key={screen.id}
            name={screen.name}
            options={{
              tabBarStyle: {
                backgroundColor: colors.mainBackground,
                height: getScreenHeight(8),
                // borderTopWidth: 1,
                width: "100%",
                alignSelf: "center",
                // borderRadius: 60,
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
