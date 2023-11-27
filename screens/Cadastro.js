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
          <Image
            source={require("../assets/abacaxi.png")}
            style={{ width: 27, height: 51 }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 21, marginLeft: 15 }}>
            CADASTRO
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={{ padding: 15 }}>
          <Pressable>
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
            <TextInput
              placeholder="Seu email"
              keyboardType="email-adress"
              style={{
                backgroundColor: "#ffffff",
                padding: 12,
                marginTop: 12,
                marginBottom: 12,
                borderRadius: 15,
              }}
            ></TextInput>

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

            <TouchableOpacity>
              <Pressable
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
              </Pressable>
            </TouchableOpacity>
          </Pressable>
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
