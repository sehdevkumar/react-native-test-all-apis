import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
