import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyHeader from '../../components/AppHeader.tsx';
import OrderScreen from '../../screens/Checkout.tsx';
import OrderComplete from '../../screens/OrderComplete.tsx';

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
        header: () => <MyHeader showBack title={'Cart'} />,
      }}>
      <Stack.Screen name="Cart" component={OrderScreen} />
      <Stack.Screen name="Order" component={OrderComplete} />
    </Stack.Navigator>
  );
};

export default CartStack;
