import { createDrawerNavigator } from '@react-navigation/drawer';
import Ventes from '../(components)/ventes';
import Depenses from '../(components)/depenses';
import { useEffect, useState } from 'react';
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Colors from '@/constants/Colors';

const Drawer = createDrawerNavigator();

type initRoute = {
    initialRouteName: string
}
function DrawerLaroutApp({initialRouteName}: initRoute){

  const [firstRoutname, setFirstRoutname] = useState(initialRouteName)
  const [isMenuSawn, setIsMenuSawn ] = useState(false)
  const showProfilMenu= ()=>{
    setIsMenuSawn(!isMenuSawn)
  }

  return (
    <Drawer.Navigator
      initialRouteName={firstRoutname}
      screenOptions={{
        headerRight: () => (
          <View style={{ position: "relative", alignItems: "center" }}>
            <Pressable style={styles.avatarContainer} onPress={showProfilMenu}>
              <Image
                source={require("@/assets/images/avatar.png")}
                style={styles.avatarImage}
              />
              <View style={styles.avatarCurrentUser}>
                <Text style={styles.avatarName}>Ibrahima BAH</Text>
                <Text style={styles.avatarOnline}>Online</Text>
              </View>
            </Pressable>
            {isMenuSawn ? (
              <View style={styles.menuProfile}>
                <Pressable style={styles.itemMenuProfile}>
                  <Text style={styles.itemMenuProfileText}>Profile</Text>
                </Pressable>
                <Pressable style={styles.itemMenuProfile}>
                  <Text style={styles.itemMenuProfileText}>Se déconnecter</Text>
                </Pressable>
              </View>
            ) : (
              <View></View>
            )}
          </View>
        ),
      }}
    >
      <Drawer.Screen
        name="MesDepenses"
        component={Depenses}
        options={{
          title: "Dépenses",
        }}
      />
      <Drawer.Screen
        name="MesVentes"
        component={Ventes}
        options={{
          title: "Ventes",
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerLaroutApp;

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: Colors.lightrgb,
    marginRight: 10,
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  avatarImage: {
    width: 30,
    height: 30,
    borderRadius: 50
  },
  avatarCurrentUser: {
    marginLeft: 5,
    alignItems: "center"
  },
  avatarName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  avatarOnline: {
    fontSize: 14
  },
  menuProfile: {
    position: "absolute",
    top: 40,
    backgroundColor: Colors.white,
    paddingVertical: 10,
    flex: 1
  },
  itemMenuProfile: {
    flex: 1,
    paddingVertical: 5,
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    borderColor: Colors.secondary,
    paddingHorizontal: 15,
  },
  itemMenuProfileText: {
    flex: 1,
    fontSize: 16
  }
})
