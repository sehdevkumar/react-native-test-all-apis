import { Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

const AddWaterPage = () => {
  return (
    <View style={{ width: "100%", height: "100%", flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" , color: Colors.dark.text }}>Water Tracking On</Text>
    </View>
  );
};

export default AddWaterPage;
        