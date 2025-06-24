import React from 'react';
import ScreenContainer from '../components/ScreenContainer';
import { View, Text, Image } from 'react-native';
import { GlobalStyle } from '../styling/GlobalStyle';

const TrackOrderScreen = () => {
  return (
    <ScreenContainer scroll>
      <View className="flex flex-col gap-2 mb-4">
        <Text style={{ fontSize: 24, fontWeight: 500 }}>
          Preparing your order...
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 400 }}>
          Arriving at <Text className="font-bold">10:15</Text>
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 400 }} className="font-sans">
          Latest arrival by 10:40
        </Text>
      </View>
      <View
        className="flex flex-row justify-center"
        style={GlobalStyle.nutriContainer}
      >
        <Image
          source={require('../assests/images/prepare.png')}
          style={{ width: '100%', height: 235 }}
        />
      </View>
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
    </ScreenContainer>
  );
};

export default TrackOrderScreen;
