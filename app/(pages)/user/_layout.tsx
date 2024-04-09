import React from "react";
import { Stack, router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Pressable } from "react-native";

const UserStack = () => {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="[id]"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Специалист",
          headerShadowVisible: false,
          headerLeft(props) {
            return (
              <Pressable onPress={() => router.back()}>
                <ChevronLeft color="#333" size={38} />
              </Pressable>
            );
          },
        }}
      />
    </Stack>
  );
};

export default UserStack;
