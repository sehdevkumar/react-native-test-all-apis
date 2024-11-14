import { Colors } from "@/constants/Colors";
import React from "react";
import { TextInput, StyleSheet } from "react-native";

const StyledTextInput = ({onChange}: {onChange: (arg:unknown)=> void}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={(d)=> onChange(d)}
      placeholder="Search topic"
      placeholderTextColor="lightgray" // Light color for better contrast
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.dark.tint,
    borderWidth: 1,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    outlineColor: "red", // Applied only on web, ignored on mobile
    fontSize: 16,
    marginVertical: 8,
    backgroundColor: "#1e1e1e", // Dark background to match the text color
  },
});

export default React.memo(StyledTextInput);
