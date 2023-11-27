import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CenteredImages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require('../../assets/images/img1.png')}
          style={styles.image}
        />
        <Image
          source={require('../../assets/images/img2.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.row}>
        <Image
          source={require('../../assets/images/img3.png')}
          style={styles.image}
        />
        <Image
          source={require('../../assets/images/img4.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default CenteredImages;
