import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useAlimentosContext } from "../contexts/AlimentoContext";
import { useEffect } from "react";

const ListaCafeDaManha = ({ navigation }) => {
  const { alimentos } = useAlimentosContext();

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
            CAFÉ DA MANHÃ
          </Text>
        </View>

        <View>
          {alimentos.map((a) => {
            if (a.categoria === "Café da Manhã")
              return (
                <>
                  <Text>
                    {a.nome}
                    {a.qtd}
                  </Text>
                </>
              );
          })}
        </View>
      </View>
    </View>
  );
};

export default ListaCafeDaManha;
