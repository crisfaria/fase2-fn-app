import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const CadastroScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tela de Cadastro</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#feffbf",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CadastroScreen;
