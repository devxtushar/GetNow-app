import './global.css';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from './src/screens/ProductScreen';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import OrderDetailScreen from './src/screens/OrderDetailScreen';
import TrackOrderScreen from './src/screens/TrackOrderScreen';
import CartIcon from './src/components/CartIcon';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import ProfileScreen from './src/screens/ProfileScreen';
import { PaperProvider } from 'react-native-paper';

export type RootStackParamList = {
  Products: undefined;
  'Product-Detail': undefined;
  'Order-Detail': undefined;
  'Track-Order': undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <StatusBar backgroundColor="white" />
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Profile">
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
                  name="Profile"
                  component={ProfileScreen}
                  options={{
                    headerShown: true,
                    headerTitle: 'Edit Profile',
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
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PaperProvider>
    </Provider>
  );
};

export default App;
