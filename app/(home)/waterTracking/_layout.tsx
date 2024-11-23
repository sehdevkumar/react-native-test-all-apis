import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View } from "react-native";
import { Colors } from "@/constants/Colors";

export default function WaterTrackingLayout() {
  return (
    <View style={{ flex: 1 , paddingBottom: 10 }}>
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
          name="addWater"
          options={{
            title: "Add Water",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="plus" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="history" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
