import React from "react";
import { View, Text, Button } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;
type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Details"
>;

const DetailsScreen: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const { pizza } = route.params;

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
      <Text>Name: {pizza.name}</Text>
      <Text>Description: {pizza.description}</Text>
      <Text>Price: {pizza.price}</Text>
      <Text>Quantity: {pizza.quantity}</Text>
      <View style={{ marginBottom: 10 }}>
        <Button
          title="Close Details"
          onPress={() => navigation.goBack()} // Use navigation here
        />
      </View>
    </View>
  );
};

export default DetailsScreen;
