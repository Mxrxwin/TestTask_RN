import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import UserPage from "../../src/pages/userPage";


const Index = () => {
  const { id } = useLocalSearchParams();
  return (
    <UserPage id = {id as string}/>
  );
};

export default Index;

const styles = StyleSheet.create({});
