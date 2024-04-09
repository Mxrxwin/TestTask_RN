import { User } from "../../types/types";
import { View, Text, Image, StyleSheet } from "react-native";
import { getAgeWord } from "../shared/ageFormating";
import CustomButton from "../shared/button";

export const UserAboutLayout = ({ user }: { user: User }): JSX.Element => {
    return (
      <View>
        <View style={styles.mainContainer}>
          <Image style={styles.avatar} source={{ uri: user.avatar }} />
          <Text style={styles.name}> {user.name} </Text>
          <Text style={styles.exp}>
            Опыт: {user.exp} {getAgeWord(user.exp)}
          </Text>
          <Text style={styles.cost}>Получить совет: {user.cost}С</Text>
          <Text style={styles.regalia}>{user.regalia}</Text>
          <View
            style={{
              borderTopWidth: 1,
              borderColor: "#F0f0f0f0",
              width: "90%",
              marginTop: 10,
            }}
          ></View>
        </View>
        <View style={styles.subMainContainer}>
            <Text style={styles.title}>Образование</Text>
            <Text style={styles.education}>{user.education.map((item : string, index: number) =>
              index === 0 ? item : ", " + item
            )}</Text>
            <Text style={styles.title}>Обо мне</Text>
            <Text style={styles.about}>{user.about}</Text>
        </View>
        <View style={{marginTop: 40}}>
            <CustomButton text={"Посоветоваться"} onPress={() => console.log('take a tip')} />
        </View>
        <View style={{height: 40}}>

        </View>
        
      </View>
    );
  };

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
  