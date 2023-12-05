import RNPickerSelect from "react-native-picker-select";
import {
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useAlimentosContext } from "../contexts/AlimentoContext";
import { v4 as uuidv4 } from "uuid";
import { useUserContext } from "../contexts/UserContext";
import { useForm, Controller } from "react-hook-form";

const RegistroAlimentosScreen = ({ navigation }) => {
  const { adicionarAlimento } = useAlimentosContext();
  const { getUser, logout } = useUserContext();
  const user = getUser(); //Utilizando as informações de contexto de usuário
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      categoria: "Café da Manhã",
      nomeDoAlimento: "",
      qtdDoAlimento: "",
    },
  });//função de tratamentos de erro, uso do contexto, e recebimento dos inputs do usuário

  const onSubmit = async (data) => {
    adicionarAlimento({ ...data, id: uuidv4() });

    navigation.navigate("Home");
  };//função que recebe, identifica o input do usuário com um id para cada registro

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
          paddingTop: 54,
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
              REGISTRO DE ALIMENTOS
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 15, marginLeft: 15 }}>
              {user?.email}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            logout();
            navigation.navigate("Login");
          }}
        >
          <Image
            source={require("../assets/logout.png")}
            style={{ width: 51, height: 51, marginRight: 15 }}
          />
        </TouchableOpacity>
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
            Categoria do Alimento:
          </Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <RNPickerSelect
                key={uuidv4()}
                onBlur={onBlur}
                value={value}
                placeholder="Escolha a categoria"
                onValueChange={onChange}
                items={[
                  { label: "Café da Manhã", value: "Café da Manhã" },
                  { label: "Almoço", value: "Almoço" },
                  { label: "Lanche", value: "Lanche" },
                  { label: "Jantar", value: "Jantar" },
                ]}// valores das categorias de refeições possiveis de serem registradas
                style={{
                  backgroundColor: "#ffffff",
                  padding: 12,
                  marginTop: 12,
                  borderRadius: 15,
                }}
              />
            )}
            name="categoria"
          />
          {errors.categoria?.type === "required" && (
            <Text
              style={{
                color: "#cc0000",
                fontWeight: "bold",
                marginBottom: 12,
                marginLeft: 12,
              }} //tratamento do erro caso o campo não seja preenchido
            >
              Campo de preenchimento obrigatório.
            </Text>
          )}
        </View>
        <View style={{ padding: 15 }}>
          <Text
            style={{
              // marginTop: 15,
              fontSize: 18,
              marginLeft: 12,
              color: "#10482f",
            }}
          >
            Nome do Alimento:
          </Text>
          <Pressable>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Escreva o nome do alimento"
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
              name="nomeDoAlimento"
            />
            {errors.nomeDoAlimento?.type === "required" && (
              <Text
                style={{
                  color: "#cc0000",
                  fontWeight: "bold",
                  marginBottom: 12,
                  marginLeft: 12,
                }}//Campo de preenchimento obrigatório com o nome do alimento a ser registrado e tratamento de erro caso fique vazio
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
            Quantidade:
          </Text>
          <Pressable>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Ex: 200"
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
              name="qtdDoAlimento"
            />
            {errors.qtdDoAlimento?.type === "required" && (
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
            }}//botão para salvar os inputs do usuário na lista de alimentos de acordo com a categoria escolhida
            title="Salvar"
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegistroAlimentosScreen;
