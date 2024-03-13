import React from "react";
import * as DocumentPicker from "expo-document-picker";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomDocumentPicker = () => {
  const getDocumentAsync = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        multiple: true,
        // type: "image/jpeg",
        type: "application/pdf",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={getDocumentAsync}>
        <Text style={styles.title}>Pick Document</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "black",
  },
});

export default CustomDocumentPicker;
