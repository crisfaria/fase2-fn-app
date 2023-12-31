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
import { useForm, Controller } from "react-hook-form";
import { autenticaUsuario } from "../services/authService";

const LoginScreen = ({ navigation }) => {
  const { login } = useUserContext(); //Função para contexto de usuário

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      senha: "",
    },
  }); //Função de checagem para o Login

  const onSubmit = async (data) => {
    const resultado = await autenticaUsuario(data);
    if (resultado === true) {
      login({ email: data.email });
      navigation.navigate("Home");
    } else {
      alert("Credenciais de acesso inválidas.");
    }
  }; //Função de validação de credenciais

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
          paddingTop: 54,
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
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
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
              )}
              name="email"
            />
            {errors.email && (
              <Text
                style={{
                  color: "#cc0000",
                  fontWeight: "bold",
                  marginBottom: 12,
                  marginLeft: 12,
                }}
              >
                Campo de preenchimento obrigatório.
              </Text>
            )}
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
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
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
              )}
              name="senha"
            />
            {errors.senha?.type === "required" && (
              <Text
                style={{
                  color: "#cc0000",
                  fontWeight: "bold",
                  marginBottom: 12,
                  marginLeft: 12,
                }}
              >
                Campo de preenchimento obrigatório.
              </Text>
            )}
            {errors.senha?.type === "minLength" && (
              <Text
                style={{
                  color: "#cc0000",
                  fontWeight: "bold",
                  marginBottom: 12,
                  marginLeft: 12,
                }}
              >
                Sua senha deve conter no mínimo 6 números.
              </Text>
            )}
          </Pressable>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
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
    </View> //Nessa View consta: o cabeçalho da Logo do Abacaxi com a navegação de voltar a página.
    //Contém o nome da página onde o usuário esta navegando.
    //Campos para o preenchimento com as informações do cadastro e botão de "entrar" navegando para a página principal.
    //Caso o usuário não tenha cadastro, aparecerá um "Alert" indicando que o mesmo não foi cadastrado.
    //Texto clicável, direcionando para tela de cadastro.
  );
};

export default LoginScreen;
