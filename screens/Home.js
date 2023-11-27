import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Carousel from "react-native-snap-carousel";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeScreen = ({ navigation }) => {
  const handleAddMealPress = () => {
    navigation.navigate("Registro");
  };

  const [waterHistory, setWaterHistory] = useState([]);

  const addToWaterHistory = (amount) => {
    const newHistory = [
      ...waterHistory,
      { id: waterHistory.length + 1, amount },
    ];
    setWaterHistory(newHistory);
  };
  const removeWaterItem = (itemId) => {
    const updatedHistory = waterHistory.filter((item) => item.id !== itemId);
    setWaterHistory(updatedHistory);
  };

  const calculateTotalWater = () => {
    const totalWater = waterHistory.reduce(
      (total, item) => total + item.amount,
      0
    );
    return totalWater;
  };

  const data = [
    { id: 1, image: require("../assets/cafedamanha.png") },
    { id: 2, image: require("../assets/almoco.png") },
    { id: 3, image: require("../assets/lanche.png") },
    { id: 4, image: require("../assets/jantar.png") },
  ];

  return (
    <View style={[styles.container, { backgroundColor: "#FFEBA3" }]}>
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/abacaxi.png")}
              style={{ width: 27, height: 51 }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 21, marginLeft: 15 }}>
            PÁGINA INICIAL
          </Text>
        </View>
      </View>
      <View style={styles.waterHistoryBox}>
        <Text style={styles.waterHistoryTitle}>Histórico de Água</Text>
        <FlatList
          data={waterHistory}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.waterHistoryItem}>
              <Text>{item.amount} ml</Text>
              <TouchableOpacity onPress={() => removeWaterItem(item.id)}>
                <Ionicons
                  name="trash-bin"
                  size={18}
                  color="#000"
                  style={styles.trashIcon}
                />
              </TouchableOpacity>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {/* Linha preta abaixo dos itens do histórico */}
        <View style={styles.blackLine}></View>
        {/* Total de água ingerido */}
        <View style={styles.totalWaterContainer}>
          <Text style={styles.totalWaterText}>
            Total de Água: {calculateTotalWater()} ml
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { marginTop: 6 }]}
          onPress={() => addToWaterHistory(1000)}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>1L</Text>
            <Ionicons name="water" size={30} color="#000" style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { marginTop: 6 }]}
          onPress={() => addToWaterHistory(500)}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>500ml</Text>
            <Ionicons name="water" size={30} color="#000" style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { marginTop: 6 }]}
          onPress={() => addToWaterHistory(200)}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>200ml</Text>
            <Ionicons name="water" size={30} color="#000" style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>

      <SafeAreaView style={{ marginTop: 20 }}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={data}
            renderItem={({ item }) => (
              <View style={styles.carouselItem}>
                <Image source={item.image} style={styles.image} />
              </View>
            )}
            sliderWidth={400}
            itemWidth={160}
          />
        </View>
      </SafeAreaView>

      <TouchableOpacity
        style={[styles.addButton, { bottom: 30 }]} // Ajuste a propriedade bottom conforme necessário
        onPress={handleAddMealPress}
      >
        <View style={styles.addButtonInner}>
          <Icon name="add-circle" size={60} color="#000" />
          <Text style={styles.addButtonText}>Adicionar Refeição</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flex: 1,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    backgroundColor: "#CCEB9D",
  },
  carouselContainer: {
    height: 280,
  },
  description: {
    textAlign: "center",
  },
  titleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
    alignItems: "flex-end",
    justifyContent: "space-around",
    backgroundColor: "#CCEB9D",
    height: 170,
    borderBottomEndRadius: 100,
    borderBottomLeftRadius: 100,
  },
  title: {
    position: "relative",
    fontSize: 24,
    color: "#000000",
    marginRight: 20,
  },
  subtitle: {
    fontSize: 24,
    color: "#000000",
    marginRight: 20,
    bottom: 30,
  },
  addButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    borderRadius: 40,
    width: 400,
    alignSelf: "center",
    position: "absolute",
    bottom: 100,
  },
  addButtonInner: {
    alignItems: "center",
  },
  addButtonText: {
    color: "#000",
    fontSize: 16,
  },
  logo: {
    position: "absolute",
    top: 9,
    left: 170,
    width: 70,
    height: 140,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#516E7D",
    padding: 10,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#000",
  },
  buttonText: {
    fontSize: 19,
    color: "#000",
  },
  waterHistoryBox: {
    backgroundColor: "#6F95A8",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10, // Ajuste conforme necessário
    flexGrow: 1,
    borderWidth: 2,
    borderColor: "#000",
  },
  waterHistoryContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  waterHistoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    height: 50,
  },
  waterHistoryItem: {
    backgroundColor: "#516E7D",
    padding: 8,
    marginRight: 10,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1, // Adiciona a borda inferior
    borderBottomColor: "#000", // Cor da borda inferior
  },
  blackLine: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    marginVertical: 10,
  },
  totalWaterContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  totalWaterText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  trashIcon: {
    marginLeft: 10,
  },
});

export default HomeScreen;
