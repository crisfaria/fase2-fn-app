import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login";
import CadastroScreen from "./screens/Cadastro";
import HistoricoScreen from "./screens/Historico";
import RegistroScreen from "./screens/Registro";
import EstatisticaScreen from "./screens/Estatistica";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Histórico" component={HistoricoScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Estatística" component={EstatisticaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
