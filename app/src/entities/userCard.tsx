import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { User } from "../../types/types";
import { getAgeWord } from "../shared/ageFormating";

const UserCard = ({
  prop,
  child,
  backgroundColor,
}: {
  prop: User;
  child: JSX.Element | null;
  backgroundColor: string;
}) => {



  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundColor},
      ]}
    >
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={{ uri: prop.avatar }} />
        <View style={styles.textBlock}>
          <Text style={styles.name}>{prop.name}</Text>
          <Text>
            Опыт {prop.exp} {getAgeWord(prop.exp)}
          </Text>
          <Text>
            Образование{" "}
            {prop.education.map((item, index) =>
              index === 0 ? item : ", " + item
            )}
          </Text>
        </View>
      </View>

      {child}
    </View>
  );
};
export default UserCard;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 999,
    marginHorizontal: 10,
  },
  container: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 20,
    marginBottom: 10,
    padding: 10,
    flexDirection: "column",
    marginHorizontal: 20,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textBlock: {
    justifyContent: "space-between",
    height: 70,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
});
