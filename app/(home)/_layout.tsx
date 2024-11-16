import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";

export default function HomeLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.dark.headerColor,
          },
          headerTitle: "Home",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="/readerwrapper/[id].tsx" options={{headerShown:false}} />
      </Stack>
    </>
  );
}
