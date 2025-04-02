import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import RideCard from "./RideCard";

const UpcomingRides = ({ navigation }) => {
  const rides = [
    {
      id: 1,
      day: "SAT",
      date: "Mar 15, 2025",
      time: "8:00 AM",
      title: "Weekend City Explorer",
      location: "Central Park, New York",
      distance: "15 km",
      duration: "1.5 hrs",
      status: "Available",
    },
    {
      id: 2,
      day: "SUN",
      date: "Mar 16,2025",
      time: "7:00 AM",
      title: "Endurance Challenge",
      location: "Brooklyn Bridge",
      distance: "35 km",
      duration: "3 hrs",
      status: "Almost Full",
    },
    {
      id: 3,
      day: "THU",
      date: "Mar 20, 2025",
      time: "7:30 AM",
      title: "Charity Ride for Education",
      location: "Hudson River Park",
      distance: "25 km",
      duration: "2 hrs",
      status: "Available",
    },
    {
      id: 4,
      day: "SAT",
      date: "Mar 22, 2025",
      time: "7:00 AM",
      title: "Sunset Beach Ride",
      location: "Rockaway Beach",
      distance: "20 km",
      duration: "2 hrs",
      status: "Closed",
    },
  ];

  const onEnrollButtonPress = (ride) => {
    navigation.navigate("RideEnrollment", { ride })
  }

  const onViewDetailsButtonPress = (ride) => {
    navigation.navigate("RideDetails", { ride })
  }

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
        {/* <FlatList
          data={rides}
          renderItem={(ride) => 
            <RideCard 
              ride={ride}
              viewDetails={onViewDetailsButtonPress}
              enroll={onEnrollButtonPress} 
            />
          }
          keyExtractor={(ride) => ride.id.toString()}
          numColumns={1}
        /> */}
        {rides.map((ride, index) => (
            <RideCard ride={ride} viewDetails={onViewDetailsButtonPress} enroll={onEnrollButtonPress} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333"
  },

  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    padding: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 5,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16
  },

  ridesList: {
    paddingHorizontal: 15,
    marginTop: 10
  },

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
  
  rideImageContainer: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden"
  },
  rideImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  dayBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 5,
    alignItems: "center",
  },
  dayText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333"
  },
  dateText: {
    fontSize: 10,
    color: "#666"
  },

  rideDetails: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  rideTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6
  },
  rideInfo: {
    marginLeft: 6,
    marginRight: 6,
    color: "#444",
    fontSize: 13,
    fontWeight: "500"
  },

  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    marginLeft: 8
  },
  easy: {
    backgroundColor: "#28a745"
  },
  medium: {
    backgroundColor: "#ff9800"
  },
  hard: {
    backgroundColor: "#ff4444"
  },
  levelText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  },

  viewDetailsContainer: {
    marginTop: 10,
    paddingHorizontal: 5
  },
  viewDetailsText: {
    color: "#0057FF",
    fontSize: 14,
    fontWeight: "600"
  },

  rideActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 4
  },
  statusBadge: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5
  },

  available: {
    backgroundColor: "#28a745"
  },
  almostfull: {
    backgroundColor: "#ff9800"
  },
  closed: {
    backgroundColor: "#ff4444"
  },

  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  },
  enrollButton: {
    backgroundColor: "#0057FF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  enrollText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14
  },
});

export default UpcomingRides;
