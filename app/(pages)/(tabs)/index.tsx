import { StyleSheet, View } from "react-native";
import UserLayout from "../../src/pages/userLayout";

export default function index() {

  return (
    <View style={styles.container}>
      <UserLayout titleText="Специалисты"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
