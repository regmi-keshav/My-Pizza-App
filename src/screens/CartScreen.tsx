// src/screens/CartScreen.tsx

import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { CartItem } from "../types";
import { styles } from "../styles/styles";

const CartScreen: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Items</Text>
      <FlatList
        data={cartItems} // Ensure cartItems is an array of CartItem
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Price: {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CartScreen;
