import { ScrollView, StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { useState } from "react";

const HistoricoScreen = () => {
  const [selected, setSelected] = useState("");
  return (
    <ScrollView style={styles.container}>
      <View>
        <Calendar
          style={{ marginBottom: 96, backgroundColor: "#FFEBA3" }}
          onDayPress={(day) => {
            setSelected(day.dateString);
            title = "Estatisticas";
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "#CCEB9D",
            },
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEBA3",
    //alignItems: "center",
    //justifyContent: "center",
  },
});

export default HistoricoScreen;
