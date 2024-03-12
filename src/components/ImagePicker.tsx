import React from "react";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const CustomImagePicker = () => {
  const pickImageAsync = async () => {
    const { status: checkPermisisonStatus } =
      await ImagePicker.getMediaLibraryPermissionsAsync();

    console.log("checkPermisisonStatus", checkPermisisonStatus);

    if (checkPermisisonStatus !== "granted") {
      const { status, granted, canAskAgain } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log("RequestPermissionStatus", status, canAskAgain);
      if (status !== "granted") {
        return Alert.alert("Permission Denied", "Please check your settings", [
          { text: "Ok", onPress: () => Linking.openSettings() },
        ]);
      }
    }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        // aspect: [16, 9],
        quality: 1,
      });

      if (!result.canceled) {
        console.log(result);
      } else {
        console.log("User cancelled the image picker");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pickCameraAsync = async () => {
    const { status: checkPermisisonStatus } =
      await ImagePicker.getCameraPermissionsAsync();

    console.log("checkPermisisonStatus", checkPermisisonStatus);

    if (checkPermisisonStatus !== "granted") {
      const { status, granted, canAskAgain } =
        await ImagePicker.requestCameraPermissionsAsync();
      console.log("RequestPermissionStatus", status, canAskAgain);
      if (status !== "granted") {
        return Alert.alert("Permission Denied", "Please check your settings", [
          { text: "Ok", onPress: () => Linking.openSettings() },
        ]);
      }
    }

    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [9, 16],
        quality: 1,
      });

      if (!result.canceled) {
        console.log(result);
      } else {
        console.log("User cancelled the image picker");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={pickImageAsync}>
        <Text style={styles.title}>Pick Image</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pickCameraAsync}>
        <Text style={styles.title}>Pick Camera</Text>
      </TouchableOpacity>

      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        onLoadStart={() => console.log("Load started")}
        onLoadEnd={() => console.log("Loading Done")}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
        blurRadius={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
  image: {
    height: 400,
    width: "100%",
    backgroundColor: "#0553",
  },
});

export default CustomImagePicker;
