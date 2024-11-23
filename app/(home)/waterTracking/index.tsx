import { SafeAreaView, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { BarChart } from "react-native-gifted-charts";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BarCharts from "@/components/BarCharts";
const IndexPage = () => {
  const barData = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <BarChart rulesType="solid" yAxisTextStyle={{ color: Colors.dark.text }} frontColor={"#177AD5"} barWidth={22} data={barData} />; */}
        <BarCharts />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default IndexPage;
