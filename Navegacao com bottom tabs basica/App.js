import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Hoteis from "./src/pages/Hoteis";
import PontosTuristicos from "./src/pages/PontosTuristicos";
import Hub from "./src/pages/Hub";
import Login from "./src/pages/Login";
import Localizacao from "./src/pages/Localizacao";

function HomeTabs(){
  const Tab = createBottomTabNavigator();
  return(
      <Tab.Navigator>
        <Tab.Screen name="Hub" component={Hub}/>
        <Tab.Screen name="Hoteis" component={Hoteis}/>
        <Tab.Screen name="Pontos Turísticos?*GULP*" component={PontosTuristicos}/>
      </Tab.Navigator>
    )
}


export default function App(){
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Localizacao" component={Localizacao}/>
          <Stack.Screen name="HomeTabs" component={HomeTabs}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
};