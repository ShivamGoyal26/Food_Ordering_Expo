import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import { getScreenHeight } from "../utils/dimensions";

const SplashRoute = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <Image style={styles.image} resizeMode="contain" source={images.logo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: getScreenHeight(20),
    width: getScreenHeight(20),
  },
});

export default SplashRoute;
