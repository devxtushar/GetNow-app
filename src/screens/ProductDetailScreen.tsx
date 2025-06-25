import React from 'react';
import { Image, View, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import { GlobalStyle } from '../styling/GlobalStyle';
import { useRoute } from '@react-navigation/native';

const ProductDetailScreen = () => {
  const route = useRoute<any>();
  const { title, thumbnail, packages, packagesTitle, price, relatedProd } =
    route.params.data;
  return (
    <ScreenContainer scroll>
      <View className="mb-10">
        <Image
          source={thumbnail}
          style={{ width: '100%', height: 250 }}
          resizeMode="contain"
        />
        <Text className="font-sans font-bold" style={{ fontSize: 24 }}>
          {title}
        </Text>
      </View>
      <View className="flex flex-col gap-5">
        <View>
          <Text style={GlobalStyle.infoValue} className="mb-2">
            Information
          </Text>
          <View style={GlobalStyle.infoContainer}>
            <Text style={GlobalStyle.infoLabel}>Price</Text>
            <Text style={GlobalStyle.infoValue}>${price}/pc</Text>
          </View>
          <View style={GlobalStyle.infoContainer}>
            <Text style={GlobalStyle.infoLabel}>Price per ground</Text>
            <Text style={GlobalStyle.infoValue}>${price}/lb</Text>
          </View>
          <View style={GlobalStyle.infoContainer}>
            <Text style={GlobalStyle.infoLabel}>Package</Text>
            <Text style={GlobalStyle.infoValue}>
              {packages} {packagesTitle}
            </Text>
          </View>
        </View>
        <View>
          <Text style={GlobalStyle.infoValue} className="mb-2">
            Nutrition facts
          </Text>
          <View style={GlobalStyle.nutriContainer}>
            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.infoValue}>
                Serving size about {packages} {packagesTitle}
              </Text>
            </View>
            <View style={GlobalStyle.parentDivider} />
            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.infoValue}>
                Calories {110 + packages}
              </Text>
              <Text style={GlobalStyle.infoValue}>% Daily Value</Text>
            </View>
            <View style={GlobalStyle.parentDivider} />

            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.infoValue}>Total Fat 0g</Text>
              <Text style={GlobalStyle.infoLabel}>0%</Text>
            </View>
            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.infoValue}>Saturated Fat 0g</Text>
              <Text style={GlobalStyle.infoLabel}>0%</Text>
            </View>
            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.infoValue}>Total Fat 0g</Text>
              <Text style={GlobalStyle.infoLabel}>0%</Text>
            </View>
            <View style={GlobalStyle.childDivider} />

            <View style={GlobalStyle.infoContainer}>
              <Text style={[GlobalStyle.infoValue, { fontSize: 18 }]}>
                Sodium 0mg
              </Text>
              <Text style={GlobalStyle.infoLabel}>0%</Text>
            </View>
            <View style={GlobalStyle.childDivider} />

            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.infoValue}>Total Carbohydrate 30g</Text>
              <Text style={GlobalStyle.infoLabel}>10%</Text>
            </View>
            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.infoValue}>Dietary Fiber 3g</Text>
              <Text style={GlobalStyle.infoLabel}>10%</Text>
            </View>
            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.infoValue}>Sugars 19g</Text>
            </View>
            <View style={GlobalStyle.childDivider} />

            <View style={GlobalStyle.infoContainer}>
              <Text style={[GlobalStyle.infoValue, { fontSize: 18 }]}>
                Protein 1g
              </Text>
            </View>
            <View style={GlobalStyle.parentDivider} />

            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.nutriLabel}>Potassium</Text>
              <Text style={GlobalStyle.nutriLabel}>15%</Text>
            </View>
            <View style={GlobalStyle.childDivider} />

            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.nutriLabel}>Calcium</Text>
              <Text style={GlobalStyle.nutriLabel}>0%</Text>
            </View>
            <View style={GlobalStyle.childDivider} />

            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.nutriLabel}>Iron</Text>
              <Text style={GlobalStyle.nutriLabel}>2%</Text>
            </View>
            <View style={GlobalStyle.childDivider} />

            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.nutriLabel}>Vitamin A</Text>
              <Text style={GlobalStyle.nutriLabel}>2%</Text>
            </View>
            <View style={GlobalStyle.childDivider} />

            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.nutriLabel}>Vitamin C</Text>
              <Text style={GlobalStyle.nutriLabel}>15%</Text>
            </View>
            <View style={GlobalStyle.childDivider} />
            <View style={GlobalStyle.infoContainer}>
              <Text style={GlobalStyle.infoLabel} className="font-sans">
                * The % Daily Value (DV) tells you how much a nutrient in a
                serving of food contributes to a daily diet. 2,000 calories a
                day is used for general nutritional advice.
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={GlobalStyle.infoValue} className="mb-2">
            Related
          </Text>
          <View className="flex flex-row gap-5">
            {relatedProd.map((item: any, idx: number) => (
              <View
                className="p-2"
                style={GlobalStyle.customBoxShadow}
                key={idx}
              >
                <Image source={item} style={{ width: 80, height: 80 }} />
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default ProductDetailScreen;
