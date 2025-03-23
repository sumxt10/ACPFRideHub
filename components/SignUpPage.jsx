import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CheckBox from "expo-checkbox"; 

const SignUpPage = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false); 

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join our Cycling Community</Text>

      <View style={styles.inputContainer}>
      <MaterialIcons name="person" size={20} color="#666" style={styles.icon} />
        <TextInput placeholder="Full Name" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="mail-outline" size={20} color="#666" style={styles.icon} />
        <TextInput placeholder="Email Address" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
      <MaterialIcons name="phone" size={20} color="#666" style={styles.icon} />
        <TextInput placeholder="Phone Number" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
      <MaterialIcons name="credit-card" size={20} color="#666" style={styles.icon} />
        <TextInput placeholder="Aadhar Card Number" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock-outline" size={20} color="#666" style={styles.icon} />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock-outline" size={20} color="#666" style={styles.icon} />
        <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry />
      </View>

      <View style={styles.termsContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? "#007bff" : undefined} 
        />
        <Text style={styles.termsText}>
          I agree to the{" "}
          <Text style={styles.termsLink}>Terms & Conditions</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.replace("Login")}
        >
          Login
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
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  termsText: { marginLeft: 5 },
  termsLink: { color: "#007bff", fontWeight: "bold" },
  signupButton: {
    backgroundColor: "#0057FF",
    padding: 15,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    marginVertical: 10,
  },
  signupText: { color: "#fff", fontWeight: "bold" },
  loginText: { marginTop: 20 },
  loginLink: { color: "#007bff", fontWeight: "bold" },
});

export default SignUpPage;
