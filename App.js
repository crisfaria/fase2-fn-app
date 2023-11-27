import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login";
import CadastroScreen from "./screens/Cadastro";
import HistoricoScreen from "./screens/Historico";
import RegistroScreen from "./screens/Registro";
import EstatisticaScreen from "./screens/Estatistica";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        /> */}
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Estatistica" component={EstatisticaScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
