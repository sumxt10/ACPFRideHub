import React, { useState } from "react";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    console.log(email)
    console.log(password)
    e.preventDefault();
    if(!email || email.length === 0 || !password || password.length === 0) {
        setError("Email or Password not provided");
        return;
    }
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    let raw = JSON.stringify({
        "email": email,
        "password": password
    });

    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(`http://localhost:${process.env.PORT}/login`, requestOptions)
    .then(response => response.json())
    .then(result => {
        if(!result.success) {
          console.log("Error: " + str(result.message))
          return;
        }
        console.log('User Login Successful');
        navigation.navigate("Home");
    })
    .catch(error => {
        console.error("Error: ", error);
    });
  }

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
        <TextInput
          placeholder="Email or Phone Number"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
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
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => submitHandler()}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.guestButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.guestText}>Continue as Guest</Text>
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
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10
  },
  title: {
    fontSize: 22,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#888",
    marginBottom: 20,
    marginTop: 5
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    padding: 10,
    borderRadius: 8,
    width: "90%",
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
    marginLeft: 10
  },
  input: {
    flex: 1,
    fontWeight: 500
  },
  forgotPassword: {
    color: "#007bff",
    alignSelf: "flex-end",
    marginLeft: 200,
    marginBottom: 12,
    marginTop: 7
  },
  loginButton: {
    backgroundColor: "#0057FF",
    padding: 15,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    marginVertical: 5
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15
  },
  guestButton: {
    backgroundColor: "#888888",
    borderWidth: 1,
    borderColor: "#888888",
    padding: 15,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    marginVertical: 5
  },
  guestText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15
  },
  signupText: {
    marginTop: 20
  },
  signupLink: {
    color: "#007bff",
    fontWeight: "bold"
  },
});

export default LoginPage;
