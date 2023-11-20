import { Text, View } from "react-native";

const LoginScreen = () => {
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
          <Text>abacaxi</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 21, marginLeft: 15 }}>
            MEU HEADER LINDÃO
          </Text>
        </View>
      </View>
      <View style={{ flexGrow: 1, padding: 15 }}>
        <Text>Tela de Login</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
