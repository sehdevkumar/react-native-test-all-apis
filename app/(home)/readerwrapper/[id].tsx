import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Markdown from "react-native-markdown-display";
import { ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import ZodIntroduction from "../topics/ZodIntroduction";
import { ReactNode, useEffect, useState } from "react";
import UseReactHookFormLibrary from "../topics/UseReactHookFormLibrary";
import { useRouteInfo, useSearchParams } from "expo-router/build/hooks";

export default function ReaderWrapper() {
  const router = useRouteInfo();
  const [currentRenderedComponent, setCurrentComponent] =
    useState<ReactNode>(null);

  const listOfComponents: Array<{
    topic: string;
    component: React.ReactNode;
  }> = [
    {
      topic: "zodschema",
      component: <ZodIntroduction />,
    },
    {
      topic: "reacthookform",
      component: <UseReactHookFormLibrary />,
    },
  ];

  useEffect(() => {
    if (router.params.id) {
      const matchingComponent = listOfComponents.find(
        (d) => d.topic.replaceAll(" ", "").toLowerCase() === router.params.id
      );
      setCurrentComponent(
        matchingComponent ? matchingComponent.component : null
      );
    }
  }, [router.params.id]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.dark.background }}>
        <ScrollView>
          {currentRenderedComponent || (
            <Markdown>
              You selected an invalid topic or no topic was provided.
            </Markdown>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
