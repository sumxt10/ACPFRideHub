import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import ShopItem from './ShopItem';

const Shop = ({ navigation }) => {
  const items = [
    {
      id: 1,
      name: "Cycling T-Shirt",
      price: 500,
      image: require("../assets/user1.png")
    },
    {
      id: 2,
      name: "Cycling Helmet",
      price: 300,
      image: require("../assets/user2.png")
    },
    {
      id: 3,
      name: "Cycling Shoes",
      price: 250,
      image: require("../assets/user3.png")
    },
  ]

  return ( 
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shop</Text>
      </View>

      <FlatList
        data={items}
        numColumns={1}
        renderItem={({item}) => <ShopItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>
  )
}

export default Shop

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 25
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    zIndex: 0,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
})