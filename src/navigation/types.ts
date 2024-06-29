import { CartItem } from "../types";

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Details: { pizza: CartItem };
};
