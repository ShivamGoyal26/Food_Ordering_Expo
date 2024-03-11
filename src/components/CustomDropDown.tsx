import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { getScreenHeight } from "../utils/dimensions";

const CustomDropDown = ({
  children,
  visible,
  dimissModal,
  overlay,
  textRef,
}: any) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      textRef.current.measure((x, y, width, height, pageX, pageY) => {
        // height is the component height
        console.log("pageY", pageY);
        setPosition(height + pageY + StatusBar.currentHeight);
      });
    }, 300);
  }, []);

  return (
    <Pressable>
      <Modal animationType="none" transparent={true} visible={visible}>
        <Pressable
          onPress={dimissModal}
          style={[
            styles.screen,
            { backgroundColor: overlay ? "#00000066" : "transparent" },
          ]}
        >
          <Pressable
            style={[
              styles.dropDown,
              {
                top: position,
                maxHeight: 200,
              },
            ]}
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
