import { Text, View } from "react-native";
import LandingPage from "./LandingPage";
import { Colors } from "@/constants/Colors";

 const IndexPage = () => {
  return (
    <View style={{ width: "100%", height: "100%", flex: 1 , padding: 10 }}>
        <LandingPage/>
    </View>
  );
};


export default IndexPage