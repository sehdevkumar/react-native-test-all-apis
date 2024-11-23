import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View } from "react-native";
import { Colors } from "@/constants/Colors";

export default function MoodsTrackingLayout() {
  return (
    <View style={{ flex: 1, paddingBottom: 10 }}>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: Colors.dark.tabIconSelected,
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="addMood"
          options={{
            title: "Add Mood",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="smile-o" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "Mood History",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="history" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
