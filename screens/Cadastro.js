import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const CadastroScreen = ({ navigation }) => {
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
            CADASTRO
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={{ padding: 15 }}>
          <Text
            style={{
              marginTop: 15,
              fontSize: 18,
              marginLeft: 12,
              color: "#10482f",
            }}
          >
            Nome Completo:
          </Text>
          <Pressable>
            <TextInput
              placeholder="Digite seu nome completo aqui"
              keyboardType="default"
              style={{
                backgroundColor: "#ffffff",
                padding: 12,
                marginTop: 12,
                marginBottom: 12,

                borderRadius: 15,
              }}
            ></TextInput>
          </Pressable>
          <Text
            style={{
              marginTop: 15,
              fontSize: 18,
              marginLeft: 12,
              color: "#10482f",
            }}
          >
            Seu endereço de Email:
          </Text>
          <Pressable>
            <TextInput
              placeholder="Seu email"
              keyboardType="email-address"
              style={{
                backgroundColor: "#ffffff",
                padding: 12,
                marginTop: 12,
                marginBottom: 12,
                borderRadius: 15,
              }}
            ></TextInput>
          </Pressable>
          <Text
            style={{
              marginTop: 15,
              fontSize: 18,
              marginLeft: 12,
              color: "#10482f",
            }}
          >
            Escolha uma Senha
          </Text>
          <Pressable>
            <TextInput
              placeholder="Senha, apenas números"
              keyboardType="numeric"
              style={{
                backgroundColor: "#ffffff",
                padding: 12,
                marginTop: 12,
                marginBottom: 12,
                borderRadius: 15,
              }}
            ></TextInput>
          </Pressable>
          <Text
            style={{
              marginTop: 15,
              fontSize: 18,
              marginLeft: 12,
              color: "#10482f",
            }}
          >
            Confirme sua Senha
          </Text>
          <Pressable>
            <TextInput
              placeholder="Confirme sua Senha, apenas números"
              keyboardType="numeric"
              style={{
                backgroundColor: "#ffffff",
                padding: 12,
                marginTop: 12,
                marginBottom: 12,
                borderRadius: 15,
              }}
            ></TextInput>
          </Pressable>
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
            title="Enviar"
          >
            <Text>Enviar</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 30 }}>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{ textAlign: "center", color: "#10482f", fontSize: 15 }}
              >
                Já tenho conta, quero fazer login!
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CadastroScreen;
