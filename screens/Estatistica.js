import { ScrollView, StyleSheet, Text, View } from "react-native";

const EstatisticaScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>
          TELA DE ESTATÍSTICA (Essa tela recebe informações da tela de registro
          de alimentos e registo de água)
        </Text>
        <Text>DD/MM/YYYY Dia da semana</Text>
        <Text>Total de refeições do dia</Text>
        <Text>Total de água do dia</Text>
        <Text>Total de calorias do dia</Text>
        <Text>Refeição 1</Text>
        <Text>Refeição 2</Text>
        <Text>Refeição 3</Text>
        <Text>Refeição 4</Text>
        <Text>Refeição 5</Text>
        <Text>Refeição 6</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#feffbf",
    //alignItems: "center",
    //justifyContent: "center",
  },
});

export default EstatisticaScreen;
