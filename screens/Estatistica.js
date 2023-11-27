import {
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";

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
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/abacaxi.png")}
              style={{ width: 27, height: 51 }}
            />
          </Pressable>
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
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text
              style={{
                textAlign: "center",
                color: "#10482f",
                fontSize: 15,
                marginTop: 12,
                backgroundColor: "#FFD14F",
                padding: 15,
                width: "80%",
                borderRadius: 15,
              }}
            >
              Ir para a Página Inicial
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EstatisticaScreen;
