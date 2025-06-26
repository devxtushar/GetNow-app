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
        totalAmount: action.payload.priceWithDelivery,
        status: 'preparing',
      };
      console.log(action.payload);
      state.orders.push(newOrder);
    },
    updateOrderStatus(state, action) {},
  },
});

export const { placeOrder, updateOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;
