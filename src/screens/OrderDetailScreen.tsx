import React from 'react';
import ScreenContainer from '../components/ScreenContainer';
import { View, Text, Image } from 'react-native';
import { GlobalStyle } from '../styling/GlobalStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OrderDetailScreen = () => {
  return (
    <ScreenContainer>
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row gap-5 items-center">
          <MaterialIcons name="location-pin" size={30} />

          <View>
            <Text style={GlobalStyle.infoValue}>San Francisco Bay Area</Text>
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
        <Text style={GlobalStyle.infoValue}> $0.27</Text>
      </View>
      <View>
        <View className="flex flex-row gap-5 items-center py-2">
          <Text style={GlobalStyle.infoValue}>1 pc</Text>
          <Image
            source={require('../assests/images/p1.jpg')}
            style={{ width: 50, height: 50 }}
          />
          <View>
            <Text style={GlobalStyle.infoValue}> Organic Banana</Text>
            <Text style={GlobalStyle.infoLabel}> $0.27/pc</Text>
          </View>
        </View>
      </View>
      <View style={GlobalStyle.childDivider} />
      <View className="flex flex-row gap-5 mt-5">
        <MaterialIcons name="access-time-filled" size={25} />
        <View className="flex flex-col gap-2">
          <Text style={GlobalStyle.infoValue}>
            The minimum order amount is $10.00
          </Text>
          <View style={[GlobalStyle.nutriContainer, { width: '95%' }]}>
            <Text style={GlobalStyle.infoLabel} className="font-sans">
              Add $29.73 more to your order and get your items delivered for
              free
            </Text>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default OrderDetailScreen;
