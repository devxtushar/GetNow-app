import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../datas/product';

export type CartItem = {
  product: Product;
  quantity: number;
};
type CartState = {
  items: CartItem[];
};
const initialState: CartState = {
  items: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      // here we get the product which is added to cart and pushed to items
      state.items.push({ product: action.payload, quantity: 1 });
    },

    increaseQty(state, action: PayloadAction<string>) {
      // here we find exact product id and then increase quantity
      const item = state.items.find(i => i.product.id === action.payload);
      if (item) {
        item.quantity = item.quantity + 1;
      }
    },
    decreaseQty(state, action: PayloadAction<string>) {
      // here we find exact product id and then decrease quantity, but only if qty more then
      const item = state.items.find(i => i.product.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity = item.quantity - 1;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});
export const { addToCart, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
