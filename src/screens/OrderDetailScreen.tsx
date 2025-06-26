import React, { useState } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import { View, Text, Image, Button } from 'react-native';
import { GlobalStyle } from '../styling/GlobalStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { placeOrder } from '../redux/slice/orderSlice';
import { clearCart } from '../redux/slice/cartSlice';

const OrderDetailScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cartSlice.items);
  const orderItems = useSelector((state: any) => state.orderSlice);

  const totalProdPrice = cartItems.reduce(
    (sum: number, item: any) => sum + item.quantity * item.product.price,
    0,
  );
  const priceWithDelivery =
    totalProdPrice <= 30 ? totalProdPrice + 2 : totalProdPrice;
  console.log(orderItems, 'orderItems');
  return (
    <ScreenContainer>
      {cartItems.length > 0 ? (
        <View>
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row gap-5 items-center">
              <MaterialIcons name="location-pin" size={30} />

              <View>
                <Text style={GlobalStyle.infoValue}>
                  San Francisco Bay Area
                </Text>
                <Text style={GlobalStyle.infoLabel} className="font-sans">
                  John's List
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={40} />
          </View>
          <View
            style={GlobalStyle.nutriContainer}
            className="my-5 flex flex-row justify-between items-center"
          >
            <View className="flex-row gap-2 items-center">
              <View
                style={{ backgroundColor: 'red', width: 35, height: 35 }}
                className="flex justify-center items-center"
              >
                <Text
                  className="capitalize"
                  style={{ fontSize: 6, color: 'white' }}
                >
                  Safeway
                </Text>
              </View>

              <Text style={GlobalStyle.infoValue}>Safeway</Text>
            </View>
            <Text style={GlobalStyle.infoValue}>
              ${totalProdPrice.toFixed(2)}
            </Text>
          </View>
          <View>
            {cartItems.map((item: any, index: number) => {
              const { product, quantity } = item;
              return (
                <View
                  className="flex flex-row gap-2 items-center py-2"
                  key={index}
                >
                  <Text style={GlobalStyle.infoValue}>
                    {product.packages} {product.packagesTitle} - {quantity} qty
                  </Text>
                  <Image
                    source={product.thumbnail}
                    style={{ width: 50, height: 50 }}
                  />
                  <View style={{ width: '55%' }}>
                    <Text style={GlobalStyle.infoValue}>{product.title}</Text>
                    <Text style={GlobalStyle.infoLabel}>
                      ${product.price}/{product.packagesTitle}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={GlobalStyle.childDivider} />
          {/* //From here logic applied for free delivery and minimum order amount*/}
          <View className="flex flex-row gap-5 mt-5">
            {totalProdPrice < 10 && (
              <MaterialIcons name="access-time-filled" size={25} />
            )}
            <View className="flex flex-col gap-2">
              {totalProdPrice < 10 && (
                <Text style={GlobalStyle.infoValue}>
                  The minimum order amount is $10.00
                </Text>
              )}
              {totalProdPrice <= 30 && (
                <View style={[GlobalStyle.nutriContainer, { width: '95%' }]}>
                  <Text style={GlobalStyle.infoLabel} className="font-sans">
                    Add ${(30 - totalProdPrice).toFixed(2)} more to your order
                    and get your items delivered for free
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View className="my-5">
            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.infoLabel}>Delivery Fee</Text>
              <Text style={GlobalStyle.infoValue}>
                ${totalProdPrice <= 30 ? 2 : 0}
              </Text>
            </View>
            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.infoLabel}>Total amount</Text>
              <Text style={GlobalStyle.infoValue}>
                {totalProdPrice <= 30
                  ? (totalProdPrice + 2).toFixed(2)
                  : totalProdPrice.toFixed(2)}
              </Text>
            </View>
            <View style={GlobalStyle.childDivider} />
            {totalProdPrice >= 10 && (
              <View className="mt-10">
                <Button
                  title="Go to checkout"
                  color="#000000"
                  onPress={() => {
                    dispatch(
                      placeOrder({ items: cartItems, priceWithDelivery }),
                    ),
                      dispatch(clearCart());
                  }}
                />
              </View>
            )}
          </View>
        </View>
      ) : (
        <Text style={GlobalStyle.infoValue}>
          No item found! Add some products.
        </Text>
      )}
    </ScreenContainer>
  );
};

export default OrderDetailScreen;
