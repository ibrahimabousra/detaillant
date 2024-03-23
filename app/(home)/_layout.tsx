
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerLaroutApp from '../drawer.tsx/drawer';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faMoneyBill} from "@fortawesome/free-solid-svg-icons/faMoneyBill"
import {faHandHoldingDollar} from "@fortawesome/free-solid-svg-icons/faHandHoldingDollar"
const Tab = createBottomTabNavigator()
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

const DrawerWithInitVente = () =>{
  return (
    <DrawerLaroutApp initialRouteName={"ventes"}/>
  )
}

const DrawerWithInitDepenses= () =>{
  return (
    <DrawerLaroutApp initialRouteName={"depenses"}/>
  )
}

export default function TabLayout() {

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='ventes' component={DrawerWithInitVente} options={{
        tabBarIcon: ()=>(
          <FontAwesomeIcon icon={faHandHoldingDollar} />
        ),
        tabBarLabel: "Ventes"
      }}/>
      <Tab.Screen name='depenses' component={DrawerWithInitDepenses} options={{
        tabBarIcon: ()=>(
          <FontAwesomeIcon icon={faMoneyBill} />
        ),
        tabBarLabel: "Ventes"
      }}/>
    </Tab.Navigator>
  );
}
