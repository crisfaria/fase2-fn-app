import RNPickerSelect from "react-native-picker-select";
import { useState } from "react";
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

const RegistroAlimentosScreen = ({ navigation }) => {
  const [categoria, setCategoria] = useState("");
  const [nomeDoAlimento, setnomeDoAlimento] = useState("");
  const [qtdDoAlimento, setQtdDoAlimento] = useState("");

  const { alimentos, setAlimentos } = useAlimentosContext();

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
            REGISTRO DE ALIMENTOS
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
            Categoria do Alimento:
          </Text>
          <RNPickerSelect
            value={categoria}
            placeholder="Escolha a categoria"
            onValueChange={(value) => setCategoria(value)}
            items={[
              { label: "Café da Manhã", value: "Café da Manhã" },
              { label: "Almoço", value: "Almoço" },
              { label: "Lanche", value: "Lanche" },
              { label: "Jantar", value: "Jantar" },
            ]}
            style={{
              backgroundColor: "#ffffff",
              padding: 12,
              marginTop: 12,
              borderRadius: 15,
            }}
          />
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
            <TextInput
              value={nomeDoAlimento}
              onChangeText={(texto) => {
                setnomeDoAlimento(texto);
              }}
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
            <TextInput
              value={qtdDoAlimento}
              onChangeText={(texto) => {
                setQtdDoAlimento(texto);
              }}
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
          </Pressable>
          <TouchableOpacity
            onPress={() => {
              const novosAlimentos = [
                ...alimentos,
                {
                  id: uuidv4(),
                  nome: nomeDoAlimento.trim(),
                  qtd: qtdDoAlimento.trim(),
                  categoria: categoria,
                },
              ];
              setAlimentos(novosAlimentos);
              navigation.goBack();
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
            title="Salvar"
          >
            <Pressable>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>Salvar</Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegistroAlimentosScreen;
