// App import
import { CartItemInterface } from "../pages/types";

export interface CartContextType {
  cartItems: CartItemInterface[];
  addToCart: (item: CartItemInterface) => void;
  removeFromCart: (id: number) => void;

}