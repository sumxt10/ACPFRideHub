import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const SuccessfulRegistration = ({ navigation, route }) => {
  const ride = route.params?.ride;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name="arrow-back-ios" size={22} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.dataContainer}>
        <Image source={require("../assets/checkmark.png")} style={styles.checkmark}></Image>
        <Text style={styles.title}>Registration Successful</Text>
        <Text style={styles.subtitle}>You're officially enrolled for the ride</Text>

        {/* Ride Details */}
        <View style={styles.cardContainer}>
          <Text style={styles.rideTitle}>{ride.title}</Text>
          <View style={styles.detailsContainer}>
            <Image source={require("../assets/calendar.png")} style={styles.icon}></Image>
            <Text style={styles.details}>{ride.date}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Image source={require("../assets/clock.png")} style={styles.icon}></Image>
            <Text style={styles.details}>{ride.time}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Image source={require("../assets/location.png")} style={styles.icon}></Image>
            <Text style={styles.details}>{ride.location}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Image source={require("../assets/distance.png")} style={styles.icon}></Image>
            <Text style={styles.details}>{ride.distance}</Text>
          </View>
        </View>
      </View>
    </View>

  )
}

export default SuccessfulRegistration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
    marginLeft: 10
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333"
  },
  dataContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  checkmark: {
    width: 80,
    height: 80,
    marginBottom: 20
  },
  title: {
    fontSize: 26,
    fontWeight: "bold"
  },
  subtitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 500,
    color: "#888888"
  },
  cardContainer: {
    width: "100%",
    backgroundColor: "#F2F2F7",
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginVertical: 40
  },
  detailsCard: {
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 18,
    borderRadius: 15
  },
  rideTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  icon: {
    height: 16,
    width: 16,
    marginRight: 10
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  details: {
    marginVertical: 4,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  navItem: {
      alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  }
})