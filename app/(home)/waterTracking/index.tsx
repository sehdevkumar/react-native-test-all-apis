import FilterPage from "@/components/Filters";
import { Colors } from "@/constants/Colors";
import { ScrollView } from "react-native";



const IndexPage = () => {
 
  return (
    <ScrollView style={{ backgroundColor: Colors.dark.background }}>
      <FilterPage />
    </ScrollView>
  );
};

export default IndexPage;


