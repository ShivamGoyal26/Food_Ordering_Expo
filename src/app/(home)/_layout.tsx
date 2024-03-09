import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="followers" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "followers",
          title: "followers",
        }}
      />
      <Drawer.Screen
        name="following" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "following",
          title: "following",
        }}
      />
    </Drawer>
  );
}
