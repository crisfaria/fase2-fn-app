import { View, Text, Image, Pressable } from "react-native";
import { Calendar } from "react-native-calendars";
import { useState } from "react";

const HistoricoScreen = ({ navigation }) => {
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
          justifyContent: "space-between",
          alignItems: "center",
          padding: 30,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require("../assets/abacaxi.png")}
                style={{ width: 27, height: 51 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 21, marginLeft: 15 }}>
              HISTÓRICO
            </Text>
            <Text
              style={{ fontWeight: "400", fontSize: 15, marginLeft: 15 }}
            ></Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => alert("fazendo logout")}>
          <Image
            source={require("../assets/logout.png")}
            style={{ width: 51, height: 51, marginRight: 15 }}
          />
        </TouchableOpacity>
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
          onPress={() => navigation.navigate("Estatistica")}
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
