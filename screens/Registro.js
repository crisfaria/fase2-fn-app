import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";

const RegistroScreen = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
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
              REGISTRO DE REFEIÇÕES
            </Text>
          </View>
        </View>
        <ScrollView
          style={{
            flex: 1,
            display: "flex",
            padding: 30,
            flexDirection: "column",
            backgroundColor: "#FFEBA3",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 21,
              padding: 12,
              marginTop: 12,
              marginBottom: 12,
              marginLeft: 72,
              marginRight: 72,
            }}
          >
            Café da manhã
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              // padding: 12,
              // marginTop: 12,
              // marginBottom: 12,
              // marginLeft: 72,
              // marginRight: 72,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("RegistroAlimentos")}
              style={{
                backgroundColor: "#FFD14F",
                padding: 12,
                marginTop: 12,
                marginBottom: 12,
                marginLeft: 72,
                marginRight: 72,
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/icons8-mais.png")}
                style={{ width: 36, height: 36 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFD14F",

                padding: 12,
                marginTop: 12,
                marginBottom: 12,
                marginLeft: 72,
                marginRight: 72,
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/icons8-lixo-1.png")}
                style={{ width: 36, height: 36 }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 21,
              padding: 12,
              marginTop: 12,
              marginBottom: 12,
              marginLeft: 72,
              marginRight: 72,
            }}
          >
            Lanche
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("RegistroAlimentos")}
              style={{
                backgroundColor: "#FFD14F",

                padding: 12,
                marginTop: 12,
                marginBottom: 12,
                marginLeft: 72,
                marginRight: 72,
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/icons8-mais.png")}
                style={{ width: 36, height: 36 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFD14F",

                padding: 12,
                marginTop: 12,
                marginBottom: 12,
                marginLeft: 72,
                marginRight: 72,
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/icons8-lixo-1.png")}
                style={{ width: 36, height: 36 }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 21,
              padding: 12,
              marginTop: 12,
              marginBottom: 12,
              marginLeft: 72,
              marginRight: 72,
            }}
          >
            Almoço
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("RegistroAlimentos")}
              style={{
                backgroundColor: "#FFD14F",

                padding: 12,
                marginTop: 12,
                marginBottom: 12,
                marginLeft: 72,
                marginRight: 72,
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/icons8-mais.png")}
                style={{ width: 36, height: 36 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFD14F",

                padding: 12,
                marginTop: 12,
                marginBottom: 12,
                marginLeft: 72,
                marginRight: 72,
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/icons8-lixo-1.png")}
                style={{ width: 36, height: 36 }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 21,
              padding: 12,
              marginTop: 12,
              marginBottom: 12,
              marginLeft: 72,
              marginRight: 72,
            }}
          >
            Jantar
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("RegistroAlimentos")}
              style={{
                backgroundColor: "#FFD14F",

                padding: 12,
                marginTop: 12,
                marginBottom: 12,
                marginLeft: 72,
                marginRight: 72,
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/icons8-mais.png")}
                style={{ width: 36, height: 36 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFD14F",

                padding: 12,
                marginTop: 12,
                marginBottom: 12,
                marginLeft: 72,
                marginRight: 72,
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/icons8-lixo-1.png")}
                style={{ width: 36, height: 36 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 30,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text
                style={{
                  textAlign: "center",
                  color: "#10482f",
                  fontSize: 15,
                  backgroundColor: "#FFD14F",
                  padding: 15,
                  width: "80%",
                  borderRadius: 15,
                }}
              >
                Voltar para a Página Inicial
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Historico")}>
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
                Ir para a Página do Histórico
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default RegistroScreen;
