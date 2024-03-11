import React, { useRef, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getScreenHeight } from "../utils/dimensions";

const CustomDropDown = ({ children, visible, dimissModal, overlay }) => {
  const textRef = useRef(null);
  const [position, setPosition] = useState(0);

  const handleLayout = () => {
    textRef.current.measure((x, y, width, height, pageX, pageY) => {
      console.log(y, height, pageY);
      setPosition(height + pageY + 20);
    });
  };

  return (
    <Pressable ref={textRef} onLayout={handleLayout}>
      <Modal animationType="none" transparent={true} visible={visible}>
        <Pressable
          onPress={dimissModal}
          style={[
            styles.screen,
            { backgroundColor: overlay ? "#00000066" : "transparent" },
          ]}
        >
          <Pressable
            onPress={() => console.log("Pressed")}
            style={[styles.dropDown, { top: position, maxHeight: 200 }]}
          >
            <FlatList
              data={Array(100)}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => (
                <Pressable style={{ backgroundColor: "red", marginBottom: 10 }}>
                  <Text style={{ padding: 20 }}>{index}</Text>
                </Pressable>
              )}
            />
          </Pressable>
        </Pressable>
      </Modal>

      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  dropDown: {
    padding: getScreenHeight(2),
    backgroundColor: "white",
  },
});

export default CustomDropDown;
