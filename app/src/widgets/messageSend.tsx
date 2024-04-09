import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Message } from "../../types/types";
import { Check } from "lucide-react-native";

const MessageSend = ({ message }: { message: Message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.author}>{message?.author}</Text>
        <Text>{message?.message}</Text>
      </View>
      <View style={styles.timeCheck}>
        <Text>{message?.time}</Text>
        <Check size={16} color={"black"} />
      </View>
    </View>
  );
};

export default MessageSend;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  messageBox: {
    backgroundColor: "#eee",
    borderRadius: 20,
    borderEndStartRadius: 0,
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
    marginHorizontal: 7,
    marginTop: 3,
  },
});
