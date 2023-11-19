import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const CadastroScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Pressable>
          <Text>Nome Completo:</Text>
          <TextInput
            placeholder="Digite seu nome completo aqui"
            keyboardType="default"
          ></TextInput>

          <Text>Seu endereço de Email:</Text>
          <TextInput
            placeholder="Seu email"
            keyboardType="email-adress"
          ></TextInput>

          <Text>Escolha uma Senha</Text>
          <TextInput
            placeholder="Senha, apenas números"
            keyboardType="numeric"
          ></TextInput>

          <Text>Confirme sua Senha</Text>
          <TextInput
            placeholder="Confirme sua Senha, apenas números"
            keyboardType="numeric"
          ></TextInput>

          <TouchableOpacity>
            <Button title="Enviar">Enviar</Button>
          </TouchableOpacity>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEBA3",
    //alignItems: "center",
    //justifyContent: "center",
  },
});

export default CadastroScreen;
