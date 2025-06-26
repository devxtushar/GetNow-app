import './global.css';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from './src/screens/ProductScreen';
import { StatusBar, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import OrderDetailScreen from './src/screens/OrderDetailScreen';
import TrackOrderScreen from './src/screens/TrackOrderScreen';
import CartIcon from './src/components/CartIcon';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export type RootStackParamList = {
  Products: undefined;
  'Product-Detail': undefined;
  'Order-Detail': undefined;
  'Track-Order': undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar backgroundColor="white" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Products">
            <Stack.Screen
              name="Products"
              component={ProductScreen}
              options={{
                headerShown: true,
                headerTitle: 'Products',
                headerRight: () => <CartIcon />,
              }}
            />
            <Stack.Screen
              name="Product-Detail"
              component={ProductDetailScreen}
              options={{
                headerShown: true,
                headerTitle: 'Product Detail',
                headerRight: () => <CartIcon />,
              }}
            />
            <Stack.Screen
              name="Order-Detail"
              component={OrderDetailScreen}
              options={{ headerShown: true, headerTitle: 'Order Detail' }}
            />
            <Stack.Screen
              name="Track-Order"
              component={TrackOrderScreen}
              options={{ headerShown: true, headerTitle: 'Track Order' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
