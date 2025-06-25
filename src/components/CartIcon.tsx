import React from 'react';
import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

function CartIcon() {
  const navigation = useNavigation();
  const cartItems = useSelector((state: any) => state.cartSlice.items.length);
  return (
    <Pressable
      className="flex flex-row items-center"
      onPress={() => (navigation as any).navigate('Order-Detail')}
    >
      {cartItems > 0 && <Text className="text-xl">({cartItems})</Text>}

      <MaterialIcons name="shopping-cart" size={25} />
    </Pressable>
  );
}

export default CartIcon;
