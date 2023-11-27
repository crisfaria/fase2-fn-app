import React from "react";
import { FlatList, View, Dimensions, Text, Image } from "react-native";

const { width } = Dimensions.get('window');

const ListaHorizontal = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()} // Use uma propriedade 'id' única como chave
            showsHorizontalScrollIndicator={false}
            snapToOffsets={data.map((item, i) => i * (width * 0.8 - 40) + (i - 1) * 40)}
            horizontal
            snapToAlignment={"start"}
            scrollEventThrottle={16}
            decelerationRate="fast"
            style={{ marginTop: -400 }}
            renderItem={({ item }) => (
                <View
                    style={{
                        backgroundColor: item.color,
                        height: width / 2.6,
                        width: width * 0.8 - 20,
                        marginHorizontal: 10,
                        borderRadius: 12,
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={item.image}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text>{item.description}</Text>
                </View>
            )}
        />
    );
};

export default ListaHorizontal;
