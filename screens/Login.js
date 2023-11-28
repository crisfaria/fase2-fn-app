import { useRef, useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useUserContext } from "../contexts/UserContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const { setUser } = useUserContext();

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
            LOGIN
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
            Email:
          </Text>
          <Pressable>
            <TextInput
              value={email}
              onChangeText={(text) => {
                console.log(text);
                setEmail(text);
              }}
              placeholder="Digite seu Email aqui"
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
            Senha:
          </Text>
          <Pressable>
            <TextInput
              placeholder="Digite sua Senha aqui"
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
            onPress={() => {
              setUser({ email });
              navigation.navigate("Home");
            }}
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
            title="Entrar"
          >
            <Text>Entrar</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
              <Text
                style={{ textAlign: "center", color: "#10482f", fontSize: 15 }}
              >
                Ainda não tenho conta, quero me cadastrar!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
