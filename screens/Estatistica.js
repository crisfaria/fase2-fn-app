import { ScrollView, Text, View, Image } from "react-native";

const EstatisticaScreen = ({ navigation }) => {
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
          <Image
            source={require("../assets/abacaxi.png")}
            style={{ width: 27, height: 51 }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 21, marginLeft: 15 }}>
            ESTATÍSTICA
          </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text>
            TELA DE ESTATÍSTICA (Essa tela recebe informações da tela de
            registro de alimentos e registo de água)
          </Text>
          <Text>DD/MM/YYYY Dia da semana</Text>
          <Text>Total de refeições do dia</Text>
          <Text>Total de água do dia</Text>
          <Text>Total de calorias do dia</Text>
          <Text>Refeição 1</Text>
          <Text>Refeição 2</Text>
          <Text>Refeição 3</Text>
          <Text>Refeição 4</Text>
          <Text>Refeição 5</Text>
          <Text>Refeição 6</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default EstatisticaScreen;
