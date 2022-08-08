import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useUserAuth();

  const navigation = useNavigation();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password);
      // navigate('/')
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      // navigate('/home')
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
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
        <Button onPress={handleSignup}>Register</Button>
      </View>
    </KeyboardAvoidingView>
  );
}

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