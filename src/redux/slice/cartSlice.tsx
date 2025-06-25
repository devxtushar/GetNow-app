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
    removeFromCart(state, action: PayloadAction) {},
    increaseQty(state, action: PayloadAction) {},
    decreaseQty(state, action: PayloadAction) {},
    clearCart(state) {},
  },
});
export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
