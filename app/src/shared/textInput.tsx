import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({
  label,
  height,
  multiline,
  placeholder,
}: {
  label: string;
  height: number;
  multiline: boolean;
  placeholder: string;
}) => (
  <View style={[styles.container, { height: height }]}>
    <View style={[styles.labelContainer, { padding: label === "" ? 0 : 5 }]}>
      {label === "" ? null : <Text>{label}</Text>}
    </View>
    <TextInput
      style={[styles.textInput, { paddingTop: multiline ? 10 : 0 }]}
      multiline={multiline}
      placeholder={placeholder}
      placeholderTextColor={"grey"}
    />
  </View>
);

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginHorizontal: 20,
    marginTop: 30,
  },
  labelContainer: {
    position: "absolute",
    backgroundColor: "#FFF",
    top: -13,
    left: 17,
    zIndex: 50,
  },
  textInput: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#402F9F",
    borderRadius: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
