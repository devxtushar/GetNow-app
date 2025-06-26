import React, { useEffect, useState } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import { View, Text, Image } from 'react-native';
import { GlobalStyle } from '../styling/GlobalStyle';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Order } from '../datas/order';
import { updateOrderStatus } from '../redux/slice/orderSlice';
import DeliveredScreen from './DeliveredScreen';
import { Colors } from '../styling/Colors';

const TrackOrderScreen = () => {
  const [countdown, setCountdown] = useState(60);
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const { orderId } = route.params;
  console.log(orderId, 'orderId');
  const order = useSelector((state: any) =>
    state.orderSlice.orders.find((i: Order) => i.id === orderId),
  );

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
    //  here I applied for countdown for ETA
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
  const { items, totalAmount } = order;

  return (
    <ScreenContainer scroll>
      <View className="flex flex-col gap-2 mb-4">
        {order.status === 'preparing' && (
          <View className="flex flex-col gap-2">
            <Text style={{ fontSize: 24, fontWeight: 500 }}>
              Preparing your order...
            </Text>
            <Image
              source={require('../assests/images/trackerGreen.png')}
              style={{ width: '100%' }}
            />
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
            <Image
              source={require('../assests/images/altTrackerGreen.png')}
              style={{ width: '100%' }}
            />
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
            <View className="flex-row justify-between mt-5">
              <View className="flex-row">
                <View>
                  <Image
                    source={require('../assests/images/driver.jpg')}
                    style={{ width: 70, height: 70, borderRadius: 50 }}
                  />
                  <Text
                    style={{
                      color: Colors.sgrey,
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                    className="ml-5 mt-2"
                  >
                    95%
                  </Text>
                </View>
                <Image
                  source={require('../assests/images/driverCar.png')}
                  style={{ width: 100, height: 70, borderRadius: 50 }}
                />
              </View>
              <View className="flex-row gap-2 pt-2">
                <View>
                  <Text
                    style={{ fontSize: 16, fontWeight: 500, color: '#34A853' }}
                  >
                    Jonathan
                  </Text>
                  <Text
                    style={{ fontSize: 14, fontWeight: 400, color: '#000' }}
                  >
                    White Honda Civic
                  </Text>
                </View>
                <Text style={GlobalStyle.infoValue}>7EL005</Text>
              </View>
            </View>
            <View style={GlobalStyle.parentDivider} />
          </View>
        )}
        {order.status === 'delivered' && <DeliveredScreen />}
      </View>

      {/* common section for preparing and out for delivery */}
      {(order.status === 'preparing' ||
        order.status === 'out_for_delivery') && (
        <View>
          <View className="pb-10">
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
                Please knock to let me know it has arrive and then leave it at
                the doorstep
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
              <View style={GlobalStyle.parentDivider} />
            </View>
          </View>
          <View>
            <View className="my-2">
              <Text
                style={{ fontSize: 18, fontWeight: 500 }}
                className="font-sans"
              >
                Order summary
              </Text>
              <Text style={GlobalStyle.infoLabel} className="font-sans">
                Subway, Warriors Area Road
              </Text>
            </View>
            <View className="my-2">
              {items.map((item: any, index: number) => {
                const { product, quantity } = item;
                return (
                  <View
                    className="flex flex-row gap-2 items-center py-2"
                    key={index}
                  >
                    <Text style={GlobalStyle.infoValue}>
                      {product.packages} {product.packagesTitle} - {quantity}{' '}
                      qty
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

            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.infoLabel}>Total</Text>
              <Text style={GlobalStyle.infoValue}>US${totalAmount}</Text>
            </View>
          </View>
        </View>
      )}
    </ScreenContainer>
  );
};

export default TrackOrderScreen;
