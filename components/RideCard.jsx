import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const RideCard = ({ navigation, ride, viewDetails, enroll }) => {
  ride = ride.item;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.rideTitle}>{ride.title}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <MaterialIcons name="event" size={20} color="#666"  style={styles.icon} />
        <Text style={styles.details}>{ride.date}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <MaterialIcons name="schedule" size={20} color="#666"  style={styles.icon} />
        <Text style={styles.details}>{ride.time}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <MaterialIcons name="place" size={20} color="#666"  style={styles.icon} />
        <Text style={styles.details}>{ride.location}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Image source={require("../assets/distance.png")} style={styles.icon}></Image>
        <Text style={styles.details}>{ride.distance}</Text>
      </View>
      <TouchableOpacity style={styles.viewDetailsButton} onPress={() => {viewDetails(ride)}}>
        <Text style={styles.viewDetailsText}>View Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.enrollButton} onPress={() => {enroll(ride)}}>
        <Text style={styles.enrollText}>Enroll Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RideCard

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: "#F2F2F7",
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginVertical: 13,
    borderRadius: 30
  },
  detailsCard: {
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 18,
    borderRadius: 15
  },
  titleContainer: {
    alignItems: "center"
  },
  rideTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10
  },
  icon: {
    height: 18,
    width: 18,
    marginRight: 10
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  details: {
    marginVertical: 4,
    fontSize: 18
  },
  viewDetailsButton: {
    backgroundColor: "transparent",
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 15,
    borderColor: "#0057FF",
    borderWidth: 2,
    alignItems: "center"
  },
  viewDetailsText: {
    color: "#0057FF",
    fontWeight: "bold",
    fontSize: 18
  },
  enrollButton: {
    backgroundColor: "#0057FF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 15,
    borderColor: "#0057FF",
    borderWidth: 2,
    alignItems: "center"
  },
  enrollText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  },
})