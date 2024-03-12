import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Accelerometer } from "expo-sensors";
import * as Linking from "expo-linking";

// Files
import { getScreenHeight } from "../utils/dimensions";
import fonts from "../constants/fonts";

const AccelerometerStats = () => {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => Accelerometer.setUpdateInterval(1000);
  const _fast = () => Accelerometer.setUpdateInterval(16);

  const _subscribe = async () => {
    let isSensorAvailable = await Accelerometer.isAvailableAsync();
    if (isSensorAvailable) {
      const hasPermission = await Accelerometer.getPermissionsAsync();
      console.log("has Permission", hasPermission);
      if (hasPermission.granted) {
        setSubscription(Accelerometer.addListener(setData));
      } else {
        Alert.alert(
          "Perrmission denied",
          "Please open settings and cheeck the permission"
        );
      }
    }
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  console.log(subscription);

  return (
    <View style={styles.screen}>
      <Text
        style={[styles.title, { color: "green", fontFamily: fonts.semibold }]}
      >
        Accelerometer Stats
      </Text>
      <Text style={styles.title}>
        Accelerometer: (in gs where 1g = 9.81 m/s^2)
      </Text>
      <Text style={styles.title}>x: {x}</Text>
      <Text style={styles.title}>y: {y}</Text>
      <Text style={styles.title}>z: {z}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={subscription ? _unsubscribe : _subscribe}
          style={styles.button}
        >
          <Text style={styles.title}>{subscription ? "On" : "Off"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_slow}
          style={[styles.button, styles.middleButton]}
        >
          <Text style={styles.title}>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text style={styles.title}>Fast</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://expo.dev")}>
          <Text style={styles.title}>Open Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: getScreenHeight(1.8),
    marginBottom: getScreenHeight(2),
  },
});

export default AccelerometerStats;
