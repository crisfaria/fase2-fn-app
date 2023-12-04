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
import { useForm, Controller } from "react-hook-form";

const CadastroScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      confirmacaoSenha: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const respostaDoBackend = await fetch("url do servidor/login", {
        method: "POST",
        body: data,
      });

      if (respostaDoBackend.status === 200) {
        alert("ihuuuu deu bom, logou");
      } else {
        alert("Credenciais inválidas.");
      }
    } catch (e) {
      alert("deu ruim pra valer.");
    }
  };

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
          justifyContent: "flex-start",
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
              CADASTRO
            </Text>
            <Text
              style={{ fontWeight: "400", fontSize: 15, marginLeft: 15 }}
            ></Text>
          </View>
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
                  placeholder="Digite seu Nome"
                  keyboardType="default"
                  style={{
                    backgroundColor: "#ffffff",
                    padding: 12,
                    marginTop: 12,
                    marginBottom: 12,

                    borderRadius: 15,
                  }}
                ></TextInput>
              )}
              name="nome"
            />
            {errors.nome && (
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
            Seu endereço de Email:
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
            Escolha uma Senha
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
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 6,
                validate: (val) => {
                  if (watch("senha") != val) {
                    return "Confirmação inválida";
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Confirme sua Senha"
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
              name="confirmacaoSenha"
            />
            {errors.confirmacaoSenha && (
              <Text
                style={{
                  color: "#cc0000",
                  fontWeight: "bold",
                  marginBottom: 12,
                  marginLeft: 12,
                }}
              >
                Confirmção de senha inválida
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
