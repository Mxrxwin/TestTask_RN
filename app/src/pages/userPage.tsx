import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React from "react";
import { fetchUserFunc } from "../api/quieries/fetchUser";
import { User } from "../../types/types";
import { UserAboutLayout } from "../entities/userAbout";

const UserPage = ({ id }: { id: string }) => {
  

  const userQuery = fetchUserFunc(id as string);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {userQuery.isLoading ? (
            <ActivityIndicator size={"large"} />
          ) : userQuery.error ? (
            <Text>Error while trying to load users</Text>
          ) : (
            <UserAboutLayout user={userQuery.data as User} />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default UserPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 999,
    marginStart: 10,
  },
  mainContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  name: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "600",
  },
  exp: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "grey",
  },
  cost: {
    marginTop: 10,
    fontSize: 15,
    color: "grey",
  },
  regalia: {
    marginTop: 10,
    fontSize: 15,
    color: "grey",
  },
  subMainContainer: {
    marginHorizontal: 15
  },
  education: {
    fontSize: 16,
    marginBottom: 30
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 20
  },
  about: {
    fontSize: 18
  }
});
