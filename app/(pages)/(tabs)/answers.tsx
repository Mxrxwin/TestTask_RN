import { View, StyleSheet, Text } from "react-native";
import React from "react";
import UserLayout from "../../src/pages/userLayout";
const Answers = () => {
  return (
    <View style={styles.container}>
      <UserLayout titleText="Ответы"/>
    </View>
  );
};

export default Answers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
