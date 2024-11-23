import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
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
  const router = useRouter()

  // Create animated values for scaling
  const scaleWater = useRef(new Animated.Value(1)).current;
  const scaleMood = useRef(new Animated.Value(1)).current;

  // Function to handle scaling on press
  const handlePressIn = (scale: Animated.Value | Animated.ValueXY) => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (scale: Animated.Value | Animated.ValueXY,path: string) => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    
   
    if(path === "water") {
      router.push("/waterTracking")
    }
    if(path === "moods") {
      router.push("/moodsTracking")
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Water Tracking */}
      <Animated.View style={{ transform: [{ scale: scaleWater }] }}>
        <Pressable
          onPressIn={() => handlePressIn(scaleWater)}
          onPressOut={() => handlePressOut(scaleWater,"water")}
          style={[styles.card, { backgroundColor: Colors.dark.tint }]}
        >
          <Image
            source={require("../../assets/images/water.jpg")}
            style={styles.image}
          />
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
      </Animated.View>

      {/* Mood Tracking */}
      <Animated.View style={{ transform: [{ scale: scaleMood }] }}>
        <Pressable
          onPressIn={() => handlePressIn(scaleMood)}
          onPressOut={() => handlePressOut(scaleMood,"moods")}
          style={[styles.card, { backgroundColor: Colors.dark.tint }]}
        >
          <Image
            source={require("../../assets/images/moods.jpg")}
            style={styles.image}
          />
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
      </Animated.View>
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
    minWidth: "100%",
    height: 200,
    marginBottom: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Use 'resizeMode' instead of 'objectFit' for React Native
  },
});
