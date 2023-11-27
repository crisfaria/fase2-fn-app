import { View, Text, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import { useState } from "react";

const HistoricoScreen = () => {
  const [selected, setSelected] = useState("");
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#ffeba3",
      }}
    >
      <View
        style={{
          backgroundColor: "#cceb9d",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 30,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/abacaxi.png")}
              style={{ width: 27, height: 51 }}
            />
          </Pressable>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 21, marginLeft: 15 }}>
            HISTÓRICO
          </Text>
        </View>
      </View>
      <View
        style={{
          flexGrow: 1,
          padding: 15,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <Calendar
          style={{ backgroundColor: "#ffeba3" }}
          onDayPress={(day) => {
            setSelected(day.dateString);
            title = "Estatisticas";
          }}
          theme={{
            calendarBackground: "#ffeba3",
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "#CCEB9D",
              selectedColor: "#CCEB9D",
              selectedTextColor: "#10482f",
            },
          }}
        />
      </View>
    </View>
  );
};

export default HistoricoScreen;
