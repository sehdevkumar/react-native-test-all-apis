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
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="index" />

        <Stack.Screen name="(home)/moodsTracking" />

        <Stack.Screen name="(home)/waterTracking" />
      </Stack>
    </>
  );
}
