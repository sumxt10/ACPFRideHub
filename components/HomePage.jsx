import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Aamhi Cycle Premi</Text>
        <TouchableOpacity>
          <Image
            source={require("../assets/profile.png")}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <Image
            source={require("../assets/head.png")}
            style={styles.heroImage}
          />

          {/* Overlay Layer */}
          <View style={styles.overlay} />

          <View style={styles.heroTextContainer}>
            <Text style={styles.heroTitle}>Join the Cycling Revolution</Text>
            <Text style={styles.heroSubtitle}>
              Making cycling accessible for everyone
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("UpcomingRides")}>
            <FontAwesome5 name="bicycle" size={24} color="#007bff" />
            <Text style={styles.actionText}>Upcoming Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="phone-in-talk" size={24} color="#ff4444" />
            <Text style={styles.actionText}>Emergency Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons
              name="volunteer-activism"
              size={24}
              color="#28a745"
            />
            <Text style={styles.actionText}>Donations</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Events */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.eventsScroll}
        >
          <View style={styles.eventCard}>
            <Image
              source={require("../assets/upc1.png")}
              style={styles.eventImage}
            />
            <Text style={styles.eventTitle}>Weekend Mountain Trail</Text>

            <View style={styles.eventDetailsContainer}>
              <MaterialIcons name="event" size={16} color="#666" />
              <Text style={styles.eventDetails}>Sat, Feb 24 • 7:00 AM</Text>
            </View>

            <View style={styles.eventDetailsContainer}>
              <MaterialIcons name="location-on" size={16} color="#666" />
              <Text style={styles.eventDetails}>Pune Hills</Text>
            </View>

            <TouchableOpacity style={styles.enrollButton} >
              <Text style={styles.enrollText}>Enroll Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.eventCard}>
            <Image
              source={require("../assets/upc2.png")}
              style={styles.eventImage}
            />
            <Text style={styles.eventTitle}>City Night Ride</Text>

            <View style={styles.eventDetailsContainer}>
              <MaterialIcons name="event" size={16} color="#666" />
              <Text style={styles.eventDetails}>Sun, Feb 25 • 6:00 PM</Text>
            </View>

            <View style={styles.eventDetailsContainer}>
              <MaterialIcons name="location-on" size={16} color="#666" />
              <Text style={styles.eventDetails}>City Center</Text>
            </View>

            <TouchableOpacity style={styles.enrollButton}>
              <Text style={styles.enrollText}>Enroll Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Community Highlights */}
        <Text style={styles.communityTitle}>Community Highlights</Text>
        <View style={styles.highlightsContainer}>
          <View style={styles.highlightCard}>
            <FontAwesome5 name="medal" size={28} color="#007bff" />
            <Text style={styles.highlightNumber}>500+ Rides</Text>
            <Text style={styles.highlightText}>Community Milestone</Text>
          </View>
          <View style={styles.highlightCard}>
            <FontAwesome5 name="users" size={28} color="#28a745" />
            <Text style={styles.highlightNumber}>1000 Members</Text>
            <Text style={styles.highlightText}>Growing Community</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="home" size={28} color="#007bff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="event" size={28} color="#666" />
          <Text style={styles.navText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="store" size={28} color="#666" />
          <Text style={styles.navText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="notifications" size={28} color="#666" />
          <Text style={styles.navText}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="person" size={28} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    navItem: {
        alignItems: "center",
      },
      navText: {
        fontSize: 12,
        color: "#666",
        marginTop: 2,
      },      
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 30},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
  profileIcon: { width: 35, height: 35, borderRadius: 50 },

  heroContainer: { position: "relative" },
  heroImage: { width: "100%", height: 180 },
  heroTextContainer: { position: "absolute", bottom: 20, left: 20 },
  heroTitle: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  heroSubtitle: { color: "#fff" },

  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  actionButton: { alignItems: "center" },
  actionText: { marginTop: 5, fontSize: 12, fontWeight: "bold" },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 5
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold"},
  communityTitle: { fontSize: 18, fontWeight: "bold", paddingTop:35, paddingLeft: 20},
  viewAll: { color: "#007bff" },

  eventsScroll: { paddingHorizontal: 15 },
  eventCard: {
    backgroundColor: "#f8f9fa",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    width: 180,
  },
  eventImage: { width: "100%", height: 100, borderRadius: 10 },
  eventTitle: { fontWeight: "bold", marginVertical: 5 },
  eventDetails: { color: "#666", fontSize: 12 },
  enrollButton: {
    backgroundColor: "#0057FF",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    alignItems: "center",
  },
  enrollText: { color: "#fff", fontWeight: "bold" },

  highlightsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  highlightCard: {
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 10,
    width: "45%",
  },
  highlightNumber: { fontSize: 16, fontWeight: "bold" },
  highlightText: { fontSize: 12, color: "#666" },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  eventDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  eventDetails: {
    marginLeft: 5,
    color: "#666",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: "#000", 
    opacity: 0.5, 
  },
});

export default HomePage;
