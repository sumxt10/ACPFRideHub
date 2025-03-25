import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>ACPF RideHub</Text>
      <Text style={styles.subtitle}>Welcome Back !</Text>

      <View style={styles.inputContainer}>
        <MaterialIcons
          name="mail-outline"
          size={20}
          color="#666"
          style={styles.icon}
        />
        <TextInput placeholder="Email or Phone Number" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons
          name="lock-outline"
          size={20}
          color="#666"
          style={styles.icon}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don’t have an account?{" "}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: { width: 80, height: 80, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { color: "#888", marginBottom: 20, marginTop: 5},
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    padding: 10,
    borderRadius: 8,
    width: "90%",
    marginVertical: 5,
  },
  icon: { marginRight: 10 },
  input: { flex: 1 },
  forgotPassword: {
    color: "#007bff",
    alignSelf: "flex-end",
    marginLeft: 200,
    marginBottom: 5,
    marginTop: 7
  },
  loginButton: {
    backgroundColor: "#0057FF",
    padding: 15,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    marginVertical: 10,
  },
  loginText: { color: "#fff", fontWeight: "bold" },
  googleButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    marginVertical: 10,
  },
  googleText: { fontWeight: "bold" },
  signupText: { marginTop: 20 },
  signupLink: { color: "#007bff", fontWeight: "bold" },
});

export default LoginPage;
