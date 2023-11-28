import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login";
import CadastroScreen from "./screens/Cadastro";
import HomeScreen from "./screens/Home";
import ListaAlmocoScreen from "./screens/ListaAlmoco";
import ListaCafeDaManhaScreen from "./screens/ListaCafeDaManha";
import ListaJantarScreen from "./screens/ListaJantar";
import ListaLancheScreen from "./screens/ListaLanche";
import HistoricoScreen from "./screens/Historico";
import EstatisticaScreen from "./screens/Estatistica";
import RegistroAlimentosScreen from "./screens/RegistroAlimentos";
import { UserContextProvider } from "./contexts/UserContext";
import AlimentoProvider from "./contexts/AlimentoContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AlimentoProvider>
      <UserContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ListaAlmoco" component={ListaAlmocoScreen} />
            <Stack.Screen
              name="ListaCafeDaManha"
              component={ListaCafeDaManhaScreen}
            />
            <Stack.Screen name="ListaJantar" component={ListaJantarScreen} />
            <Stack.Screen name="ListaLanche" component={ListaLancheScreen} />
            <Stack.Screen name="Historico" component={HistoricoScreen} />
            <Stack.Screen
              name="RegistroAlimentos"
              component={RegistroAlimentosScreen}
            />
            <Stack.Screen name="Estatistica" component={EstatisticaScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </AlimentoProvider>
  );
}
