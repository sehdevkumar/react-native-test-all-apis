import { Colors } from "@/constants/Colors";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  PixelRatio,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const LandingPage = () => {
  const pixel = PixelRatio.getFontScale();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable style={[styles.card, { backgroundColor: Colors.dark.tint }]}>
        <Image
          source={require("../../assets/images/water.jpg")}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        ></Image>
        <Animated.Text
          style={[
            {
              fontSize: pixel * 20,
              textAlign: "center",
            },
          ]}
        >
          Water Tracking
        </Animated.Text>
      </Pressable>
      <Pressable style={[styles.card, { backgroundColor: Colors.dark.tint }]}>
        <Image
          source={require("../../assets/images/moods.jpg")}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        ></Image>
        <Animated.Text
          style={[
            {
              fontSize: pixel * 20,
              textAlign: "center",
            },
          ]}
        >
          Mood Tracking
        </Animated.Text>
      </Pressable>
    </ScrollView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  card: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden"
  },
});
