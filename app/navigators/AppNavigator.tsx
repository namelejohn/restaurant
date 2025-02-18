import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CartStack from './stacks/CartStack.tsx';
import BookingSuccess from '../screens/BookingSuccess.tsx';
import MenuScreen from '../screens/MenuOverview.tsx';
import HomeScreen from '../screens/ItemCatalog.tsx';
import ReservationForm from '../screens/ReservationForm.tsx';
import ContactUs from '../screens/ContactUs.tsx';
import MyHeader from '../components/AppHeader.tsx';
import EventMenuScreen from '../screens/EventSettings.tsx';
import EventScreen from '../screens/EventInfo.tsx';
import BonusScreen from '../screens/BonusScreen.tsx';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
        }}>
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerShown: false,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="CartStack"
          component={CartStack}
          options={{
            headerShown: false,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Shop"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Reservation"
          component={ReservationForm}
          options={{
            header: () => <MyHeader showBack title={'Reservation'} />,
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactUs}
          options={{
            header: () => <MyHeader showBack title={'Contacts'} />,
          }}
        />
        <Stack.Screen
          name="ReservationSuccessScreen"
          component={BookingSuccess}
          options={{
            header: () => <MyHeader showBack title={'Reservation'} />,
          }}
        />
        <Stack.Screen
          name="Events"
          options={{
            header: () => <MyHeader showBack title={'Events'} />,
          }}
          component={EventMenuScreen}
        />
        <Stack.Screen
          name="Event"
          options={{
            headerShown: false,
          }}
          component={EventScreen}
        />
        <Stack.Screen
          name="Bonus"
          options={{
            header: () => <MyHeader showBack title={'Loyalty Card'} />,
          }}
          component={BonusScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
