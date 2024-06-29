// src/screens/HomeScreen.tsx

import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { styles } from "../styles/styles";
import { RootStackParamList } from "../navigation/types";
import { Pizza, CartItem } from "../types";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useDispatch();
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://private-anon-b26f96742a-pizzaapp.apiary-mock.com/restaurants/1/menu?category=Pizza&orderBy=rank"
    )
      .then((response) => response.json())
      .then((data: Pizza[]) => {
        setPizzas(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching pizzas:", error);
        setIsLoading(false);
      });
  }, []);

  const handleAddToCart = (pizza: Pizza) => {
    const pizzaWithQuantity: CartItem = { ...pizza, quantity: 1 };
    dispatch(addToCart(pizzaWithQuantity));
  };

  const handleViewDetails = (pizza: Pizza) => {
    const pizzaWithQuantity: CartItem = { ...pizza, quantity: 1 };
    navigation.navigate("Details", { pizza: pizzaWithQuantity });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pizza Listing</Text>
      {isLoading ? (
        <Text>Loading pizzas...</Text>
      ) : (
        <FlatList
          data={pizzas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item.name}</Text>
              <View style={{ marginBottom: 10 }}>
                <Button
                  title="View Details"
                  onPress={() => handleViewDetails(item)}
                />
              </View>
              <View style={{ marginBottom: 10 }}>
                <Button
                  title="Add to Cart"
                  onPress={() => handleAddToCart(item)}
                />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
