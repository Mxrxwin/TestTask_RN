import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import UserCard from "../entities/userCard";
import { User } from "../../types/types";
import { fetchUsersFunc } from "../api/quieries/fetchUsers";
import { useRoute } from "@react-navigation/native";
import TopicBlock from "../features/topicBlock";
import { router } from "expo-router";
import TitleText from "../shared/title";

const UserLayout = ({titleText} : {titleText: string}) => {
  const route = useRoute();
  const usersQuery = fetchUsersFunc();

  const renderItem: ListRenderItem<User> = ({ item }) => {
    if (route.name === "answers" && item.chat.message === "") {
      return null;
    }
    return (
      <Pressable onPress={() => router.push(route.name === "answers" ? `/chat/${item.id}` : `/user/${item.id}`)}>
        <UserCard
          prop={item as User}
          child={
            route.name === "answers" ? <TopicBlock topic={item.topic} /> : null
          }
          backgroundColor="#fff"
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {usersQuery.isLoading ? <ActivityIndicator size={"large"} /> : null}
      {usersQuery.error ? <Text>Error while trying to load users</Text> : null}
      <TitleText prop={titleText}/>
      <FlatList data={usersQuery.data} keyExtractor={(_, index) => index.toString()} renderItem={renderItem} />
      <StatusBar style="auto" />
    </View>
  );
};

export default UserLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
