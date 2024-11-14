import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { LandingData, LandingPageDataType } from "../mock-json/landing-data";
import { Colors } from "@/constants/Colors";

export default function LandingPage() {
  const [getLandingData, setLandingData] = useState<LandingPageDataType[]>([]);

  useEffect(() => {
    setLandingData(LandingData);
  }, []);

  const RenderEachItem = ({ item }: { item: LandingPageDataType }) => {
    return <Text style={{ color: Colors.dark.text }}>{item.topicName}</Text>;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatList
          data={getLandingData}
          renderItem={(d) => <RenderEachItem item={d.item} />}
        ></FlatList>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
