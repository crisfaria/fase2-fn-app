import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";

const RegistroScreen = () => {
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
            <Pressable title="Voltar">
              <Image
                source={require("../assets/abacaxi.png")}
                style={{ width: 27, height: 51 }}
              />
            </Pressable>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 21, marginLeft: 15 }}>
              REGISTRO DE ALIMENTOS
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
        </ScrollView>
      </View>
    </>
  );
};

export default RegistroScreen;
