
import {  Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Link} from "expo-router"
import Colors from "@/constants/Colors";
import {router} from "expo-router"

function Login() {
  const PlaceholderImage = require('./../../assets/images/logo.png');
  const authenticate = ()=>{
    
    router.navigate("home")
  }
  return (
    <SafeAreaView style={{ justifyContent: "center" }}>
      <View style={styles.container}>
        <View style={styles.login}>
          <Image style={styles.logo} source={PlaceholderImage} />
          <Text style={styles.authentification}>Authentificaton</Text>
          <View style={styles.formControl}>
            <TextInput
              style={styles.username}
              placeholder="Username"
            />
          </View>
          <View style={styles.formControl}>
            <TextInput
              style={styles.password}
              autoComplete="password"
              placeholder="******"
              secureTextEntry={true}
            />
          </View>
          <View style={{ flexDirection: "row"}}>
            <Pressable style={styles.authentificationButton} onPress={authenticate}>
              <Text style={styles.authentificationButtonText}>Se connecter</Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Link href={"/depenses"} style={{ flex: 1 }}>
              <Pressable>
                <Text style={{ color: Colors.blue }}>
                  Vous n'avez pas encore configurer votre espace ?
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.bodybg
  },
  login: {
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 5,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.white,
    height: 400,
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
  },
  logo: {
   height: 100,
   width: 100
  },
  authentification: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: Colors.primary
  },
  formControl: {
    flexDirection: "row",
    marginVertical: 5
  },
  username: {
    borderWidth: 0.4,
    borderColor: Colors.secondary,
    flex: 1,
    padding: 5
  },
  password: {
    borderWidth: 0.4,
    borderColor: Colors.secondary,
    flex: 1,
    padding: 5
  },
  authentificationButton: {
    color: Colors.white,
    backgroundColor: Colors.success,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    borderColor: Colors.success,
    marginVertical: 10,
    flex: 1,
    justifyContent: "center"
  },
  authentificationButtonText:{
    textAlign: "center"
  }
})