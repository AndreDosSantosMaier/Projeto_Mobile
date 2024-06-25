import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Details from "./src/pages/Details";
import Hoteis from "./src/pages/Hoteis";
import NewUser from "./src/pages/NewUser";
import Login from "./src/pages/Login";
import Localizacao from "./src/pages/Localizacao";
import Hub from "./src/pages/Hub";
import PontosTuristicos from "./src/pages/PontosTuristicos";
import Voos from "./src/pages/Voos";

function HomeTabs(){
  const Tab = createBottomTabNavigator();
  return(
      <Tab.Navigator>
        <Tab.Screen name="Hoteis" component={Hoteis}/>
        <Tab.Screen name="Voos" component={Voos}/>
        <Tab.Screen name="Pontos Turísticos" component={PontosTuristicos}/>
      </Tab.Navigator>
    )
}

export default function Stack(){
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Voos">
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="NewUser" component={NewUser}/>
          <Stack.Screen name="Hub" component={HomeTabs}/>
          <Stack.Screen name="Localizacao" component={Localizacao} options={{headerLeft:null}}/>
          <Stack.Screen name="Hoteis" component={Hoteis}/>
          <Stack.Screen name="Details" component={Details}/>
          <Stack.Screen name="HomeTabs" component={HomeTabs}/>
          <Stack.Screen name="PontosTuristicos" component={PontosTuristicos}/>
          <Stack.Screen name="Voos" component={Voos}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
};
