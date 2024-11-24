import { Colors } from "@/constants/Colors";
import { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { IndexPath, Layout, Select, SelectItem } from "@ui-kitten/components";
import React from "react";

type WaterTrackingType = "weekly" | "monthly" | "yearly";
type WaterTrackingData = {
  type: WaterTrackingType;
  value: number;
};

type GenerateWeek = {
  startDate: number;
  endDate: number;
  weekNumber: number;
};

const years = Array.from({ length: 10 }, (_, i) => i + 2024);
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const FilterPage = () => {
  const [selectedType, setSelectedType] = useState<WaterTrackingType>("weekly");
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0)
  );
  const [selectedIndexMonth, setSelectedIndexMonth] = useState<
    IndexPath | IndexPath[]
  >(new IndexPath(0));
  const [selectedIndexWeek, setSelectedIndexWeek] = useState<
    IndexPath | IndexPath[]
  >(new IndexPath(0));

  const [generateWeeks, setGenerateWeeks] = useState<GenerateWeek[]>([]);

  const handleTypeChange = (type: WaterTrackingType) => {
    setSelectedType(type);
  };

  useEffect(() => {
    const year = years[(selectedIndex as IndexPath).row];
    const monthIndex = (selectedIndexMonth as IndexPath).row;
    const getWeeksInMonth = (year: number, month: number) => {
      const weeks: GenerateWeek[] = [];
      let startDate = new Date(year, month, 1);
      let endDate = new Date(year, month + 1, 0);
      let weekNumber = 1;

      while (startDate <= endDate) {
        const weekStartDate = new Date(startDate);
        const weekEndDate = new Date(startDate);
        weekEndDate.setDate(weekEndDate.getDate() + 6);

        if (weekEndDate > endDate) {
          weekEndDate.setDate(endDate.getDate());
        }

        weeks.push({
          startDate: weekStartDate.getTime(),
          endDate: weekEndDate.getTime(),
          weekNumber: weekNumber,
        });

        startDate.setDate(startDate.getDate() + 7);
        weekNumber++;
      }

      return weeks;
    };

    const generatedWeeks = getWeeksInMonth(year, monthIndex);

    setGenerateWeeks(generatedWeeks);
  }, [selectedIndex, selectedIndexMonth, selectedType]);

  return (
    <Layout style={styles.container} level="1">
      <View style={{ padding: 10 }}>
        <View
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Button
              color={
                selectedType === "weekly"
                  ? Colors.dark.activeButtonColor
                  : Colors.dark.background
              }
              title="Weekly"
              onPress={() => handleTypeChange("weekly")}
            />
          </View>
          <View
            style={{
              flex: 1,
              borderRadius: 10,

              overflow: "hidden",
            }}
          >
            <Button
              color={
                selectedType === "monthly"
                  ? Colors.dark.activeButtonColor
                  : Colors.dark.background
              }
              title="Monthly"
              onPress={() => handleTypeChange("monthly")}
            />
          </View>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Button
              color={
                selectedType === "yearly"
                  ? Colors.dark.activeButtonColor
                  : Colors.dark.background
              }
              title="Yearly"
              onPress={() => handleTypeChange("yearly")}
            />
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Select
            placeholder="Select Year"
            style={{ backgroundColor: Colors.dark.background, flex: 1 }}
            value={years[(selectedIndex as IndexPath).row]}
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
          >
            {years?.map((year) => (
              <SelectItem key={year} title={year.toString()} />
            ))}
          </Select>
          {selectedType !== "yearly" 
          &&
            <Select
              placeholder="Select Month"
              style={{ backgroundColor: Colors.dark.background, flex: 1 }}
              value={months[(selectedIndexMonth as IndexPath).row]}
              selectedIndex={selectedIndexMonth}
              onSelect={(index) => setSelectedIndexMonth(index)}
            >
              {months?.map((month) => (
                <SelectItem key={month} title={month.toString()} />
              ))}
            </Select>
          }
          {(selectedType !== "yearly" && selectedType !== "monthly") && (
            <Select
              placeholder="Select Week"
              style={{ backgroundColor: Colors.dark.background, flex: 1 }}
              value={
                "Week " +
                generateWeeks[
                  (selectedIndexWeek as IndexPath).row
                ]?.weekNumber?.toString()
              }
              selectedIndex={selectedIndexWeek}
              onSelect={(index) => setSelectedIndexWeek(index)}
            >
              {generateWeeks?.map((week) => (
                <SelectItem
                  key={week?.weekNumber}
                  title={"Week " + week?.weekNumber?.toString()}
                />
              ))}
            </Select>
          )}
        </View>
      </View>
    </Layout>
  );
};

export default React.memo(FilterPage);

const styles = StyleSheet.create({
  container: {
    minHeight: 150,
    backgroundColor: Colors.dark.background,
  },
});
