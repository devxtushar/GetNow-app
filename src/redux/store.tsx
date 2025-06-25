import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../redux/slice/cartSlice';

export const store = configureStore({ reducer: { cartSlice } });

export default store;
