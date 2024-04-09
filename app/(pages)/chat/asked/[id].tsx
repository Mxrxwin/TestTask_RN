import { StyleSheet, Text, ActivityIndicator, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { User } from "../../../types/types";
import { useLocalSearchParams } from "expo-router";
import { fetchUserFunc } from "../../../src/api/quieries/fetchUser";
import UserCard from "../../../src/entities/userCard";
import DropDown from "../../../src/shared/dropDownTopic";
import TextInput from "../../../src/shared/textInput";
import CustomTextInput from "../../../src/shared/textInput";
import CustomButton from "../../../src/shared/button";

const index = () => {
  const { id } = useLocalSearchParams();
  const userQuery = fetchUserFunc(id as string);

  return (
    <SafeAreaView style={styles.container}>
      {userQuery.isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : userQuery.error ? (
        <Text>Error while trying to load users</Text>
      ) : (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View>
            <UserCard
              prop={userQuery.data as User}
              child={null}
              backgroundColor="#eee"
            />
            <DropDown />
            <View style={{ marginTop: 30 }}>
              <CustomTextInput
                label={""}
                height={200}
                multiline={true}
                placeholder="Текст сообщения"
              />
              <CustomTextInput
                label={"Желаемый результат"}
                height={50}
                multiline={false}
                placeholder=""
              />
            </View>
          </View>
          <CustomButton
            text={"Отправить"}
            onPress={() => console.log("send")}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
