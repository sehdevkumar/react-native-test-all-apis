import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";

export default function ReaderLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.dark.headerColor,
          },
          headerTitle: "Reader",
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
