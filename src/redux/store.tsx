import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../redux/slice/cartSlice';
import orderSlice from '../redux/slice/orderSlice';

export const store = configureStore({ reducer: { cartSlice, orderSlice } });

export default store;
