import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Markdown from "react-native-markdown-display";
import { Platform, ScrollView, TextStyle } from "react-native";
import { Colors } from "@/constants/Colors";
export default function ReaderWrapper() {
  const markdownContent = `
# Landing Page Documentation

## Overview
This documentation provides an overview of the \`LandingPage\` component, which displays a searchable list of items with customizable styles.

## Components
### 1. LandingPage
The \`LandingPage\` component renders a list of topics with a search functionality to filter items based on user input.

### 2. StyledTextInput
\`StyledTextInput\` is a customized input component used for the search functionality.

## Code Explanation

\`\`\`js
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Pressable, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { LandingData, LandingPageDataType } from "../mock-json/landing-data";
import { Colors } from "@/constants/Colors";
import StyledTextInput from "@/components/StyleTextInput";

export default function LandingPage() {
  const [getLandingData, setLandingData] = useState<LandingPageDataType[]>([]);
  const [getSearchText, setSearchText] = useState<string>("");

  const setSeachText = useCallback(
    (text) => {
      setSearchText(text);
      if (text) {
        const filteredData = LandingData.filter((item) =>
          item.topicName.toLowerCase().includes(text.toLowerCase())
        );
        setLandingData(filteredData);
      } else {
        setLandingData(LandingData);
      }
    },
    []
  );

  useEffect(() => {
    setLandingData(LandingData);
  }, []);

  const RenderEachItem = ({ item }) => {
    return (
      <Pressable style={{
        backgroundColor: Colors.dark.listItemBackColor,
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 3,
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: "600",
          color: "#333",
        }}>
          {item?.topicName}
        </Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StyledTextInput onChangeText={(text) => setSeachText(text)} />
        <FlatList
          data={getLandingData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RenderEachItem item={item} />}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
\`\`\`

## Usage
To use the \`LandingPage\` component, import it and include it in your screen component.

\`\`\`javascript
import LandingPage from "@/components/LandingPage";

function App() {
  return (
    <LandingPage />
  );
}

export default App;
\`\`\`

## Notes
- Ensure that \`LandingData\` is imported from the correct file path.
- Customize \`Colors\` and styles as desired to match your theme.
`;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ padding: 10 }}>
        <ScrollView horizontal={false}>
          <Markdown style={styles as any}>{markdownContent}</Markdown>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// this is converted to a stylesheet internally at run time with StyleSheet.create(
export const styles = {
  // The main container
  body: {
    color: Colors.dark.text,
  },

  // Headings
  heading1: {
    flexDirection: "row",
    fontSize: 32,
    color: Colors.dark.text,
  },
  heading2: {
    flexDirection: "row",
    fontSize: 24,
    color: Colors.dark.text,
  },
  heading3: {
    flexDirection: "row",
    fontSize: 18,
    color: Colors.dark.text,
  },
  heading4: {
    flexDirection: "row",
    fontSize: 16,
    color: Colors.dark.text,
  },
  heading5: {
    flexDirection: "row",
    fontSize: 13,
    color: Colors.dark.text,
  },
  heading6: {
    flexDirection: "row",
    fontSize: 11,
    color: Colors.dark.text,
  },

  // Horizontal Rule
  hr: {
    backgroundColor: "#000000",
    height: 1,
  },

  // Emphasis
  strong: {
    fontWeight: "bold",
  },
  em: {
    fontStyle: "italic",
  },
  s: {
    textDecorationLine: "line-through",
  },

  // Blockquotes
  blockquote: {
    backgroundColor: "#F5F5F5",
    borderColor: "#CCC",
    borderLeftWidth: 4,
    marginLeft: 5,
    paddingHorizontal: 5,
  },

  // Lists
  bullet_list: {},
  ordered_list: {},
  list_item: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_content: {
    flex: 1,
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_content: {
    flex: 1,
  },

  // Code
  code_inline: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: Colors.dark.background,
    padding: 10,
    borderRadius: 4,
    ...Platform.select({
      ["ios"]: {
        fontFamily: "Courier",
      },
      ["android"]: {
        fontFamily: "monospace",
      },
    }),
  },
  code_block: {
    borderWidth: 1,
    borderColor: "#191919",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 4,
    ...Platform.select({
      ["ios"]: {
        fontFamily: "Courier",
      },
      ["android"]: {
        fontFamily: "monospace",
      },
    }),
  },
  fence: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: Colors.dark.background,
    padding: 10,
    borderRadius: 4,
    ...Platform.select({
      ["ios"]: {
        fontFamily: "Courier",
      },
      ["android"]: {
        
        fontFamily: "monospace",
        color: "#004000"
      },
    }),
  },

  // Tables
  table: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
  },
  thead: {},
  tbody: {},
  th: {
    flex: 1,
    padding: 5,
  },
  tr: {
    borderBottomWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",
  },
  td: {
    flex: 1,
    padding: 5,
  },

  // Links
  link: {
    textDecorationLine: "underline",
  },
  blocklink: {
    flex: 1,
    borderColor: "#000000",
    borderBottomWidth: 1,
  },

  // Images
  image: {
    flex: 1,
  },

  // Text Output
  text: {
    color: Colors.dark.text,
  },
  textgroup: {},
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  hardbreak: {
    width: "100%",
    height: 1,
  },
  softbreak: {},

  // Believe these are never used but retained for completeness
  pre: {
    color: "pink",
  },
  inline: {
    color: "blue",
  },
  span: {
    color: "red",
  },
};
