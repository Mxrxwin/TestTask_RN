import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const CustomButton = ({text, onPress} : {text: string, onPress: () => void}) => {
  return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#402F9F',
    height: 70,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    color: '#fff'
  } 
});
