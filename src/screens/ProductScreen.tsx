import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  SectionList,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import { OfferImgJSON, sections } from '../datas/product';
import ScreenContainer from '../components/ScreenContainer';
import { Colors } from '../styling/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { GlobalStyle } from '../styling/GlobalStyle';
const ProductScreen = () => {
  const width = Dimensions.get('window').width;
  const progress = useSharedValue<number>(0);
  const [category, setCategory] = useState(false);
  return (
    <ScreenContainer scroll>
      <View className="mb-5">
        <Image
          source={require('../assests/images/search.png')}
          style={{ width: '100%' }}
          resizeMode="cover"
        />
      </View>
      <View className="flex-1 flex-row justify-between mb-5">
        <View className="flex flex-row gap-2 justify-center items-center">
          <MaterialIcons name="access-time-filled" size={25} />
          <Text className="font-sans" style={{ fontSize: 16, fontWeight: 400 }}>
            In 60 minutes
          </Text>
        </View>
        <View className="flex flex-row gap-2 justify-center items-center">
          <MaterialIcons name="price-change" size={25} />
          <Text className="font-sans" style={{ fontSize: 16, fontWeight: 400 }}>
            Pricing and Fees
          </Text>
        </View>
      </View>
      <View className="mb-5 flex flex-row justify-between">
        <Pressable
          onPress={() => setCategory(false)}
          style={[
            GlobalStyle.tapBtn,
            { backgroundColor: category ? '#fff' : '#000' },
          ]}
        >
          <Text
            className="font-sans"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: category ? 'black' : 'white',
            }}
          >
            Featured
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setCategory(true)}
          style={[
            GlobalStyle.tapBtn,
            { backgroundColor: category ? '#000' : '#fff' },
          ]}
        >
          <Text
            className="font-sans"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: category ? 'white' : 'black',
            }}
          >
            Categories
          </Text>
        </Pressable>
        <Pressable style={[GlobalStyle.tapBtn, { backgroundColor: '#fff' }]}>
          <Text
            className="text-black font-sans"
            style={{ fontSize: 14, fontWeight: 500 }}
          >
            Orders
          </Text>
        </Pressable>
      </View>
      <View className="mb-5 relative">
        <Carousel
          width={width}
          height={width / 2.5}
          data={OfferImgJSON}
          autoPlay={true}
          autoPlayInterval={4000}
          scrollAnimationDuration={1000}
          onProgressChange={progress}
          renderItem={({ item, index }) => (
            <View key={index}>
              <Image
                style={{ width: '92%', height: 150 }}
                source={item.imgLink}
                resizeMode="cover"
              />
            </View>
          )}
        />
        <Text
          className="absolute text-white font-sans"
          style={{ fontSize: 16, bottom: 30, left: 30 }}
        >
          $0 Delivery Fee with selected yogurt products
        </Text>
      </View>

      <SectionList
        sections={sections}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderSectionHeader={({ section }) => (
          <View className="mb-10">
            <View className="flex flex-row justify-between mb-5">
              <Text
                className="font-sans"
                style={{ fontSize: 18, fontWeight: 600 }}
              >
                {section.title}
              </Text>
              <View className="flex flex-row justify-center item-center">
                <Text
                  className="font-sans"
                  style={{ fontSize: 16, fontWeight: 500 }}
                >
                  see all
                </Text>
                <MaterialIcons name="keyboard-arrow-right" size={22} />
              </View>
            </View>
            <FlatList
              data={section.data}
              horizontal
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10 }}
              renderItem={({ item }: { item: any }) => {
                const { thumbnail, title, price, packages, packagesTitle } =
                  item;
                return (
                  <View style={{ width: 143 }}>
                    <View className="flex flex-row justify-center">
                      <Image
                        source={thumbnail}
                        style={{ width: 100, height: 100 }}
                      />
                    </View>
                    <Text
                      className="font-sans"
                      style={{
                        fontSize: 14,
                        fontWeight: '500',
                        marginTop: 10,
                      }}
                    >
                      {title}
                    </Text>
                    <Text
                      className="font-sans"
                      style={{ fontSize: 13, fontWeight: '400' }}
                    >
                      ${price}
                    </Text>
                    <Text
                      className="font-sans"
                      style={{
                        fontSize: 13,
                        fontWeight: '400',
                        color: Colors.sgrey,
                      }}
                    >
                      {packages} {packagesTitle}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        )}
        renderItem={() => null}
      />
    </ScreenContainer>
  );
};

export default ProductScreen;
