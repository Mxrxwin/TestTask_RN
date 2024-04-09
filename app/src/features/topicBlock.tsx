import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ChevronRight } from "lucide-react-native";

const TopicBlock = ({ topic }: { topic: string }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.text}>Тема</Text>
        <Text style={styles.topic}>{topic}</Text>
      </View>
      <ChevronRight color="#333" size={26} />
    </View>
  );
};

export default TopicBlock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
  },
  topic: {
    fontSize: 18,
    marginStart: 10,
  },
});
