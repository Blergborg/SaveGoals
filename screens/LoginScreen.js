import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";
import { auth } from "../config/firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// TODO: Styling.
// Clear fields on logout.
// Best way to logout.

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("App");
      }
    });

    // Turn off listener when successfully logged in.
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user.email);
        })
        .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(`Logged In: ${user.email}`);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          // style
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          // style
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={handleLogin}>Login</Button>
        <Button onPress={handleSignUp}>Register</Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  buttonContainer: {
    marginTop: 40,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
