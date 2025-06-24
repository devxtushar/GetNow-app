import './global.css';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from './src/screens/ProductScreen';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import OrderDetailScreen from './src/screens/OrderDetailScreen';
import TrackOrderScreen from './src/screens/TrackOrderScreen';
import DeliveredScreen from './src/screens/DeliveredScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Order">
          <Stack.Screen
            name="Products"
            component={ProductScreen}
            options={{ headerShown: true, headerTitle: 'Products' }}
          />
          <Stack.Screen
            name="Product-Detail"
            component={ProductDetailScreen}
            options={{ headerShown: true, headerTitle: 'Product Detail' }}
          />
          <Stack.Screen
            name="Order"
            component={OrderDetailScreen}
            options={{ headerShown: true, headerTitle: 'Order Detail' }}
          />
          <Stack.Screen
            name="Track-Order"
            component={TrackOrderScreen}
            options={{ headerShown: true, headerTitle: 'Track Order' }}
          />
          <Stack.Screen
            name="Delivered"
            component={DeliveredScreen}
            options={{ headerShown: true, headerTitle: 'Delivered' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
