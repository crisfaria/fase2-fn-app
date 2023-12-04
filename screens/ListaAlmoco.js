import {
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { useAlimentosContext } from "../contexts/AlimentoContext";

const ListaAlmoco = ({ navigation }) => {
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
              ALMOÇO
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

      <ScrollView style={{ padding: 15 }}>
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
              flex: 1,
              display: "flex",
              flexDirection: "column",
              margin: 51,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "#ffeba3",
            }}
          >
            {alimentos.map((a) => {
              if (a.categoria === "Almoço")
                return (
                  <View
                    key={a.id}
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 24,
                        color: "#10482f",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: "#ffeba3",
                      }}
                    >
                      {`${a.nome}  =>  ${a.qtd}`}
                    </Text>
                    <Pressable onPress={() => {}}>
                      <Image
                        source={require("../assets/icons8-excluir.png")}
                        style={{
                          width: 30,
                          height: 30,
                        }}
                      />
                    </Pressable>
                  </View>
                );
            })}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "#FFD14F",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            padding: 12,
            marginTop: 12,
            marginBottom: 12,
            marginLeft: 72,
            marginRight: 72,
            borderRadius: 15,
          }}
          title="Voltar"
        >
          <Text style={{ textAlign: "center", color: "#10482f", fontSize: 15 }}>
            Voltar para Página Inicial
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ListaAlmoco;
