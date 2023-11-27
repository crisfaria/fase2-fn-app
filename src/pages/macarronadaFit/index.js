import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MacarronadaFit = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#FFf' }]}>
      <SafeAreaView style={styles.titleContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="ios-arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}></Text>
      </SafeAreaView>

      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>101 g carbs</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}> 24 g Proteins </Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}> 12 g fats</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>21 g Sugarts</Text>
          </View>
        </View>
      </View>

      <Image
        source={require('../../assets/images/macarronada.png')}
        style={styles.logo}
      />

      <TouchableOpacity style={styles.button} onPress={() => handleAddRecipe()}>
        <Text style={styles.buttonText}>Adicionar Receita</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: '#2D7A5F',
    height: 300,
    borderBottomEndRadius: 200,
    borderBottomLeftRadius: 200,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginRight: 20,
    textAlign: 'center',
  },
  description: {
    position: 'relative',
    marginBottom: 10,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 6,
    padding: 20,
    top: 40,
    textAlign: 'left',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBox: {
    backgroundColor: '#EFEFEF',
    borderRadius: 20,
    padding: 18,
    marginTop: 10,
    flex: 1,
    margin: 6,
    top: 30,
  },
  infoText: {
    fontSize: 13,
    textAlign: 'center',
  },
  logo: {
    position: "absolute",
    top: 100,
    left: 70,
    width: 80,
    height: 60,
    padding: 140,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: '#2D7A5F',
    padding: 15,
    borderRadius: 15,
    marginTop: 40,
    width: 350,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MacarronadaFit;
