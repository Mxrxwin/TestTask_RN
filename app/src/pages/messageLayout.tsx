import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft } from "lucide-react-native";
import { router } from "expo-router";
import { fetchUserFunc } from "../api/quieries/fetchUser";
import MessageChat from "../widgets/messageChat";
import { Message, User } from "../../types/types";
import CustomButton from "../shared/button";
import { ScrollView } from "@gluestack-ui/themed";

const MessageLayout = ({ id }: { id: string }) => {
  const userQuery = fetchUserFunc(id as string);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <ChevronLeft color="#333" size={38} />
          </Pressable>
          <Image
            source={{ uri: userQuery.data?.avatar }}
            style={styles.avatar}
          />
          <Text style={styles.headerName}>{userQuery.data?.name}</Text>
        </View>
        <ScrollView style={{flex: 1}}>
          {userQuery.isLoading ? (
            <ActivityIndicator size={"large"} />
          ) : userQuery.error ? (
            <Text>Error while trying to load users</Text>
          ) : (
            <MessageChat chat={userQuery.data?.chat as Message} />
          )}
        </ScrollView>
      </View>
      <CustomButton text="Спросить еще" onPress={() => router.push(`chat/asked/${id}`)}/>
    </SafeAreaView>
  );
};

export default MessageLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerName: {
    fontSize: 16,
    fontWeight: "600",
    marginStart: 10,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 999,
    marginStart: 10,
  },
});
