import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShopItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} height={50} width={50} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>₹ {item.price}</Text>
    </View>
  )
}

export default ShopItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginHorizontal: 25,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  itemImage: {
    height: 50,
    width: 50
  },
  itemName: {
    fontSize: 26,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 22,
    fontWeight: 450,
    paddingTop: 10
  }
})