import React, { useEffect, useState } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import { View, Text, Image } from 'react-native';
import { GlobalStyle } from '../styling/GlobalStyle';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Order } from '../datas/order';
import { updateOrderStatus } from '../redux/slice/orderSlice';
import DeliveredScreen from './DeliveredScreen';

const TrackOrderScreen = () => {
  const [countdown, setCountdown] = useState(60);
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const { orderId } = route.params;
  console.log(orderId, 'orderId');
  const order = useSelector((state: any) =>
    state.orderSlice.orders.find((i: Order) => i.id === orderId),
  );
  console.log(order, 'orders');

  useEffect(() => {
    if (!order) return;

    //here I applied logic for stimulated transitions of 30s
    if (order.status === 'preparing') {
      setTimeout(() => {
        dispatch(
          updateOrderStatus({
            orderId,
            status: 'out_for_delivery',
          }),
        );
      }, 30000); // use for 30s
    }

    if (order.status === 'out_for_delivery') {
      setTimeout(() => {
        dispatch(
          updateOrderStatus({
            orderId,
            status: 'delivered',
          }),
        );
      }, 30000); // use for again 30s
    }
  }, [order?.status]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev: number) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!order) return <Text style={GlobalStyle.infoValue}>Order not found</Text>;

  return (
    <ScreenContainer scroll>
      <View className="flex flex-col gap-2 mb-4">
        {order.status === 'preparing' && (
          <View className="flex flex-col gap-2">
            <Text style={{ fontSize: 24, fontWeight: 500 }}>
              Preparing your order...
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 400 }}>
              Arriving in <Text className="font-bold">{countdown}s</Text>
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: 400 }}
              className="font-sans"
            >
              Latest arrival by 1min.
            </Text>
            <View
              className="flex flex-row justify-center"
              style={GlobalStyle.nutriContainer}
            >
              <Image
                source={require('../assests/images/prepare.png')}
                style={{ width: '100%', height: 235 }}
              />
            </View>
          </View>
        )}
        {order.status === 'out_for_delivery' && (
          <View className="flex flex-col gap-2">
            <Text style={{ fontSize: 24, fontWeight: 500 }}>
              Almost there...
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 400 }}>
              Arriving in <Text className="font-bold">{countdown}s</Text>
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: 400 }}
              className="font-sans"
            >
              Latest arrival by 1min.
            </Text>
            <View
              className="flex flex-row justify-center"
              style={GlobalStyle.nutriContainer}
            >
              <Image
                source={require('../assests/images/map.png')}
                style={{ width: '100%', height: 235 }}
              />
            </View>
          </View>
        )}
        {order.status === 'delivered' && <DeliveredScreen />}
      </View>

      {/* common section for preparing and out for delivery */}
      {(order.status === 'preparing' ||
        order.status === 'out_for_delivery') && (
        <View className="py-5">
          <Text
            style={{ fontSize: 20, fontWeight: 500 }}
            className="mb-2 font-sans"
          >
            Delivery details
          </Text>
          <View style={{ marginVertical: 5 }} className="flex-col gap-2">
            <Text style={GlobalStyle.infoLabel} className="font-sans">
              Address
            </Text>
            <Text style={GlobalStyle.infoValue} className="font-sans">
              Bay Area, San Francisco, California, USA
            </Text>
            <View style={GlobalStyle.childDivider} />
          </View>
          <View style={{ marginVertical: 5 }} className="flex-col gap-2">
            <Text style={GlobalStyle.infoLabel} className="font-sans">
              Type
            </Text>
            <Text style={GlobalStyle.infoValue} className="font-sans">
              Leave at door
            </Text>
            <View style={GlobalStyle.childDivider} />
          </View>
          <View style={{ marginVertical: 5 }} className="flex-col gap-2">
            <Text style={GlobalStyle.infoLabel} className="font-sans">
              Instructions
            </Text>
            <Text style={GlobalStyle.infoValue} className="font-sans">
              Please knock to let me know it has arrive and then leave it at the
              doorstep
            </Text>
            <View style={GlobalStyle.childDivider} />
          </View>
          <View style={{ marginVertical: 5 }} className="flex-col gap-2">
            <Text style={GlobalStyle.infoLabel} className="font-sans">
              Service
            </Text>
            <Text style={GlobalStyle.infoValue} className="font-sans">
              Standard
            </Text>
            <View style={GlobalStyle.childDivider} />
          </View>
        </View>
      )}
    </ScreenContainer>
  );
};

export default TrackOrderScreen;
