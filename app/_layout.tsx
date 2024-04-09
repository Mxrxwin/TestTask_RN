import { View, Text, Pressable } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { ChevronLeft, EllipsisVertical } from "lucide-react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const RootLayout = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 3, refetchOnWindowFocus: false } },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="(pages)/(tabs)"
            options={{
              headerTitleAlign: "center",
              headerTitle: "Консультация",
              headerLeft(props) {
                return (
                  <Pressable onPress={() => console.log("to back")}>
                    <ChevronLeft color="#333" size={38} />
                  </Pressable>
                );
              },
              headerRight(props) {
                return (
                  <Pressable onPress={() => console.log("to options")}>
                    <EllipsisVertical color="#333" size={26} />
                  </Pressable>
                );
              },
            }}
          />
          <Stack.Screen
            name="(pages)/chat"
            options={{
              headerShown: false,

            }}
          />
          <Stack.Screen
            name="(pages)/user"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
