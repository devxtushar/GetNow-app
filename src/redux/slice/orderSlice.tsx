import { createSlice } from '@reduxjs/toolkit';
import { Order, OrderState } from '../../datas/order';

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    placeOrder(state, action) {
      const newOrder: Order = {
        id: Date.now().toString(),
        items: action.payload.items,
        totalAmount: action.payload.totalAmount,
        status: 'preparing',
      };
      state.orders.push(newOrder);
    },
    updateOrderStatus(state, action) {},
  },
});

const { placeOrder, updateOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;
