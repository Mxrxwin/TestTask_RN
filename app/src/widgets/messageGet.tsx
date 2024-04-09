import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Message } from "../../types/types";
import { Check } from "lucide-react-native";

const MessageGet = ({ message }: { message: Message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.author}>{message?.author}</Text>
        <Text>{message?.message}</Text>
      </View>
      <View style={styles.timeCheck}>
        <Check size={16} color={"black"} />
        <Text>{message?.time}</Text>
      </View>
    </View>
  );
};

export default MessageGet;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignSelf: 'flex-end'
  },
  messageBox: {
    backgroundColor: "#E8E6F3",
    borderRadius: 20,
    borderEndEndRadius: 0,
    padding: 10,
  },
  author: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
  },
  timeCheck: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 3,
  },
});
