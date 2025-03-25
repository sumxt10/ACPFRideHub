import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const UpcomingRides = ({ navigation }) => {
  const rides = [
    {
      date: "SAT",
      day: "Mar 15",
      title: "Weekend City Explorer",
      location: "Central Park, New York",
      distance: "15 km",
      duration: "1.5 hrs",
      level: "Easy",
      status: "Available",
      image: require("../assets/ride1.png"),
    },
    {
      date: "SUN",
      day: "Mar 16",
      title: "Endurance Challenge",
      location: "Brooklyn Bridge",
      distance: "35 km",
      duration: "3 hrs",
      level: "Hard",
      status: "Almost Full",
      image: require("../assets/ride2.png"),
    },
    {
      date: "THU",
      day: "Mar 20",
      title: "Charity Ride for Education",
      location: "Hudson River Park",
      distance: "25 km",
      duration: "2 hrs",
      level: "Medium",
      status: "Available",
      image: require("../assets/ride3.png"),
    },
    {
      date: "SAT",
      day: "Mar 22",
      title: "Sunset Beach Ride",
      location: "Rockaway Beach",
      distance: "20 km",
      duration: "2 hrs",
      level: "Medium",
      status: "Closed",
      image: require("../assets/ride4.png"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Upcoming Rides</Text>
        <TouchableOpacity>
          <MaterialIcons name="map" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={22} color="#999" />
        <TextInput placeholder="Search rides..." style={styles.searchInput} />
      </View>

      {/* Rides List */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.ridesList}>
        {rides.map((ride, index) => (
          <View key={index} style={styles.rideCard}>
            {/* Ride Image */}
            <View style={styles.rideImageContainer}>
              <Image source={ride.image} style={styles.rideImage} />
              <View style={styles.dateBadge}>
                <Text style={styles.dateText}>{ride.date}</Text>
                <Text style={styles.dayText}>{ride.day}</Text>
              </View>
            </View>

            {/* Ride Details */}
            <View style={styles.rideDetails}>
              <Text style={styles.rideTitle}>{ride.title}</Text>

              {/* Location */}
              <View style={styles.infoRow}>
                <MaterialIcons name="location-on" size={16} color="#666" />
                <Text style={styles.rideInfo}>{ride.location}</Text>
              </View>

              {/* Distance, Duration, Level */}
              <View style={styles.infoRow}>
                <FontAwesome5 name="road" size={14} color="#666" />
                <Text style={styles.rideInfo}>{ride.distance}</Text>

                <MaterialIcons name="access-time" size={16} color="#666" />
                <Text style={styles.rideInfo}>{ride.duration}</Text>

                <View style={[styles.levelBadge, styles[ride.level.toLowerCase()]]}>
                  <Text style={styles.levelText}>{ride.level}</Text>
                </View>
              </View>
            </View>

            {/* View Details Section */}
            <View style={styles.viewDetailsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("RideDetails", { ride })}>
                <Text style={styles.viewDetailsText}>View Details</Text>
              </TouchableOpacity>
            </View>

            {/* Status and Enroll Button */}
            <View style={styles.rideActions}>
              <View style={[styles.statusBadge, styles[ride.status.replace(" ", "").toLowerCase()]]}>
                <Text style={styles.statusText}>{ride.status}</Text>
              </View>
              <TouchableOpacity style={styles.enrollButton}>
                <Text style={styles.enrollText}>Enroll Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 30 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: "#333" },

  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    padding: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 5,
  },
  searchInput: { marginLeft: 10, flex: 1, fontSize: 16 },

  ridesList: { paddingHorizontal: 15, marginTop: 10 },

  rideCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  
  rideImageContainer: { position: "relative", borderRadius: 12, overflow: "hidden" },
  rideImage: { width: "100%", height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 },

  dateBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 5,
    alignItems: "center",
  },
  dateText: { fontSize: 12, fontWeight: "bold", color: "#333" },
  dayText: { fontSize: 10, color: "#666" },

  rideDetails: { paddingVertical: 10, paddingHorizontal: 5 },
  rideTitle: { fontSize: 16, fontWeight: "bold", color: "#000", marginBottom: 4 },

  infoRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  rideInfo: { marginLeft: 6, color: "#444", fontSize: 13, fontWeight: "500" },

  levelBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 12, marginLeft: 8 },
  easy: { backgroundColor: "#28a745" },
  medium: { backgroundColor: "#ff9800" },
  hard: { backgroundColor: "#ff4444" },
  levelText: { color: "#fff", fontSize: 12, fontWeight: "bold" },

  viewDetailsContainer: { marginTop: 10 },
  viewDetailsText: { color: "#0057FF", fontSize: 14, fontWeight: "600" },

  rideActions: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 },
  statusBadge: { paddingVertical: 6, paddingHorizontal: 10, borderRadius: 5 },

  available: { backgroundColor: "#28a745" },
  almostfull: { backgroundColor: "#ff9800" },
  closed: { backgroundColor: "#ff4444" },

  statusText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  enrollButton: { backgroundColor: "#0057FF", paddingVertical: 8, paddingHorizontal: 15, borderRadius: 5 },
  enrollText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
});

export default UpcomingRides;
