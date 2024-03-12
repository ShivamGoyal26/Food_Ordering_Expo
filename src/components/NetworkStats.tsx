import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Network from "expo-network";

// Files
import { getScreenHeight } from "../utils/dimensions";
import fonts from "../constants/fonts";

const NetworkStats = () => {
  const [ipAddress, setIPAddress] = useState("");
  const [networkDetails, setNetworkDetails] = useState(null);

  const getNetworkDetails = async () => {
    try {
      console.log("Working NetworkStats");
      const ip = await Network.getIpAddressAsync();
      const network = await Network.getNetworkStateAsync();
      // const airplaneMode = await Network.isAirplaneModeEnabledAsync();

      setIPAddress(ip);
      setNetworkDetails(network);

      console.log(">>>>>>>>", ipAddress);
      console.log(">>>>>>>>", network);
      // console.log(">>>>>>>>", airplaneMode);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNetworkDetails();
  }, []);

  return (
    <View style={styles.screen}>
      <Text
        style={[styles.title, { color: "green", fontFamily: fonts.semibold }]}
      >
        Network Stats
      </Text>
      <Text style={styles.title}>IP Address {ipAddress}</Text>
      <Text style={styles.title}>
        Network Details {JSON.stringify(networkDetails)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: getScreenHeight(1.8),
    marginBottom: getScreenHeight(2),
  },
  screen: {
    padding: getScreenHeight(2),
  },
});

export default NetworkStats;
