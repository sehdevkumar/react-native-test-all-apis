import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { LandingData, LandingPageDataType } from "../mock-json/landing-data";
import { Colors } from "@/constants/Colors";
import StyledTextInput from "@/components/StyleTextInput";
import { useNavigation, useRouter } from "expo-router";

export default function LandingPage() {
  const [getLandingData, setLandingData] = useState<LandingPageDataType[]>([]);
  const router = useRouter();
  
   const setSeachText = useCallback((text: string) => {
     if (text) {
       const filteredData = LandingData.filter((item) =>
         item.topicName.toLowerCase().includes(text.toLowerCase())
       );
       setLandingData(filteredData);
     } else {
       setLandingData(LandingData); // Reset to all items if search is cleared
     }
   }, []);

  useEffect(() => {
    setLandingData(LandingData);
  }, []);

  const RenderEachItem = ({ item }: { item: LandingPageDataType }) => {
      
    const onPressedTopic = ()=> {
      const id = 1
        router.push(`/readerwrapper/${item.topicName.replaceAll(" ",'').toLowerCase()}`)
    }

    return (
      <Pressable
        onPress={onPressedTopic}
        style={{
          backgroundColor: Colors.dark.listItemBackColor,
          padding: 15,
          marginVertical: 8,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOpacity: 0.8,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 6,
          elevation: 3, // For Android shadow
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#333",
          }}
        >
          {item?.topicName}
        </Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <StyledTextInput onChange={(d) => setSeachText(d as string)} />
        <FlatList
          data={getLandingData}
          renderItem={(d) => <RenderEachItem item={d.item} />}
        ></FlatList>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
