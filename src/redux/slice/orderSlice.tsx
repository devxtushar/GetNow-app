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
        id: action.payload.orderId,
        items: action.payload.items,
        totalAmount: action.payload.priceWithDelivery,
        status: 'preparing',
      };
      state.orders.push(newOrder);
    },
    updateOrderStatus(state, action) {
      const order = state.orders.find(
        (o: any) => o.id === action.payload.orderId,
      );
      if (order) {
        order.status = action.payload.status;
      }
    },
  },
});

export const { placeOrder, updateOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;
