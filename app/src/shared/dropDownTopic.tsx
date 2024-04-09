import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

const DropDown = () => {
  const [value, setValue] = useState("");
  const data = [
    { label: "RelationShips", value: "1" },
    { label: "Friends", value: "2" },
    { label: "Sex", value: "3" },
    { label: "Society", value: "4" },
    { label: "Other", value: "5" },
  ];

  const renderItem = (item: { label: string; value: string }) => {
    return item.value === value ? (
      <View style={styles.selectItem}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    ) : (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        containerStyle={styles.dropdownContainer}
        itemContainerStyle={{}}
        iconStyle={styles.iconStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={"Select item"}
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
        renderItem={renderItem}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  textItem: {
    flex: 1,
    fontSize: 15,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectItem: {
    padding: 17,
    backgroundColor: "#E8E6F3",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownContainer: {
    borderEndEndRadius: 20,
    borderEndStartRadius: 20,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderBottomWidth: 0.5,
    paddingHorizontal: 8,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },

  iconStyle: {
    width: 30,
    height: 30,
  },
});
