import { CartItem } from '../redux/slice/cartSlice';
export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  status: 'preparing' | 'out_for_delivery' | 'delivered';
}

export type OrderState = {
  orders: Order[];
};
