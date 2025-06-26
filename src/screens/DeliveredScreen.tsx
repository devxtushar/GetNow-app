import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { GlobalStyle } from '../styling/GlobalStyle';
import { useNavigation } from '@react-navigation/native';

const DeliveredScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex flex-col gap-5">
      <Text style={{ fontSize: 24, fontWeight: 500 }}>Enjoy your order</Text>
      <Text style={GlobalStyle.infoValue} className="my-5">
        Jonathan and Subway (Warriors Arena Road) worked their magic for you.
        Take a minute to rate, tip, and say thanks.
      </Text>
      <View
        className="flex flex-row justify-center"
        style={GlobalStyle.nutriContainer}
      >
        <Image
          source={require('../assests/images/deliverBag.png')}
          style={{ width: '100%', height: 235 }}
        />
      </View>
      <View className="my-10">
        <Button
          title="Close"
          color="#000"
          onPress={() => (navigation as any).navigate('Products')}
        />
      </View>
    </View>
  );
};

export default DeliveredScreen;
