
import {  Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Link} from "expo-router"
import Colors from "@/constants/Colors";
import {router} from "expo-router"
import { Shadow } from "react-native-shadow-2";
import { defaultStyles } from "@/constants/defautlStyle";

function Login() {
  const PlaceholderImage = require('./../../assets/images/logo.png');
  const authenticate = ()=>{
    
    router.navigate("home")
  }
  const configureProfile = ()=>{
    
    router.navigate("profile/config-profile")
  }
  return (
    <SafeAreaView style={{ justifyContent: "center" }}>
      <View style={styles.container}>
        <View style={styles.login}>
          <Shadow style={styles.shadow} distance={defaultStyles.distance}>
            <Image style={styles.logo} source={PlaceholderImage} />
            <Text style={styles.authentification}>Authentificaton</Text>
            <View style={styles.formControl}>
              <TextInput style={styles.input} placeholder="Username" />
            </View>
            <View style={styles.formControl}>
              <TextInput
                style={styles.input}
                autoComplete="password"
                placeholder="******"
                secureTextEntry={true}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={styles.authentificationButton}
                onPress={authenticate}
                android_ripple={{
                  color: Colors.secondaryrgb
                }}
              >
                <Text style={styles.authentificationButtonText}>
                  Se connecter
                </Text>
              </Pressable>
            </View>
            <View style={{ flexDirection: "row", paddingVertical: 5 }}>
              <Pressable onPress={configureProfile}>
                <Text style={{ color: Colors.blue }}>
                  Vous n'avez pas encore configurer votre espace ?
                </Text>
              </Pressable>
            </View>
          </Shadow>
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
    backgroundColor: Colors.bodybg,
  },
  login: {
    marginTop: 150,
    marginLeft: 20,
    marginRight: 20,
  },
  shadow: {
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.white,
  },
  logo: {
    height: 100,
    width: 100,
  },
  authentification: {
    fontSize: defaultStyles.fontSizeHeaderTitle,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: Colors.primary,
  },
  formControl: {
    flexDirection: "row",
    marginVertical: 5,
    borderRadius: 5,
  },
  input: {
    borderWidth: 0.4,
    borderColor: Colors.secondary,
    borderRadius: defaultStyles.inputBorderRadius,
    flex: 1,
    padding: 5,
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
    justifyContent: "center",
  },
  authentificationButtonText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 22,
  },
});