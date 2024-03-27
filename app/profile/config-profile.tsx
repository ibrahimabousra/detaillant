import Colors from "@/constants/Colors";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Profile } from "../model/Profile";
import * as FileSystem from "expo-file-system";
import { Formik } from 'formik';
import { Shadow } from 'react-native-shadow-2';
//import { useRealm } from "@realm/react";

function configProfl() {
//  const [db, setDb] = useState({} as SQLiteDatabase);

  const [username, onChangeUsername] = useState("");
  const [fullName, onChangeFullName] = useState("");
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [profile, setProfile] = useState({
    fullName: "",
    username: "",
    phoneNumber: "",
  });
  const [errMsg, setErrMsg] = useState({ isErrMsg: false, msg: "" });
  const [profiles, setProfiles] = useState([] as any);
  const directory = FileSystem.documentDirectory;
  // const realm = useRealm();
  // const createNewProfile = () => {
  //   realm.write(() => {
  //      const profile = new Profile(realm,{fullName:fullName,username: username,phoneNumber: phoneNumber});
  //      return profile;
  //   });
  // };
  const saveProfile = ()=>{
    setProfile({fullName: fullName,phoneNumber: phoneNumber,username:username})
    console.log(profile);    
  }
  return (
    <SafeAreaView style={{ justifyContent: "center" }}>
        <View style={styles.container}>
          <View style={styles.form}>
            <Shadow
              distance={5}
              style={{
                alignItems: "center",
                backgroundColor: Colors.white,
                padding: 10,
                borderStyle: "solid",
                borderColor: Colors.white,
                borderWidth: 2,
                borderRadius: 10,
                flex: 1,
              }}
            >
              <Text style={styles.title}>Configuration du profile</Text>
              {/*<Formik
                initialValues={{
                  username: "",
                  fullName: "",
                  phoneNumber: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <>*/}
                    <View style={styles.formControl}>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangeUsername}
                        value={username}
                        placeholder="Nom d'utilisateur"
                      />
                    </View>
                    <View style={styles.formControl}>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangeFullName}
                        value={fullName}
                        placeholder="Prénom et nom"
                      />
                    </View>
                    <View style={styles.formControl}>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangePhoneNumber}
                        value={phoneNumber}
                        placeholder="Numéro de téléphone"
                      />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Pressable
                        style={styles.validButtonPressable}
                        onPress={saveProfile}
                      >
                        <Text style={styles.validButtonText}>Valider</Text>
                      </Pressable>
                    </View>
                 {/* </>
                )}
              </Formik>*/}
              <Text style={{ fontSize: 16 }}>{directory + ""}</Text>
              {errMsg.isErrMsg ? (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorMsg}>{errMsg.msg}</Text>
                </View>
              ) : (
                <View></View>
              )}
            </Shadow>
          </View>
        </View>
    </SafeAreaView>
  );
}

export default configProfl;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybg,
    flex: 1,
  },
  form: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 5,
  },
  formControl: {
    flexDirection: "row",
    marginVertical: 5,
    borderRadius: 5,
    flex: 1,
  },
  input: {
    borderWidth: 0.2,
    borderColor: Colors.secondary,
    flex: 1,
    padding: 5,
    borderRadius: 5,
  },
  validButtonPressable: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  validButtonText: {
    color: Colors.white,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorMsg: {
    color: Colors.danger,
  },
});
