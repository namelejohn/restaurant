import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import {useStore} from '../stores/StoreContext.tsx';
import COLORS from '../styles/colors.ts';

const trashIcon = require('../../app/assets/trash.png');

interface CartButtonProps {
  iconSize?: number;
}

const CartButton = (props: CartButtonProps) => {
  const {cart} = useStore().productStore;
  const iconSize = props.iconSize || 60;
  const navigation: any = useNavigation();
  return (
    <Pressable
      style={styles.iconContainer}
      onPress={() => navigation.navigate('CartStack')}>
      <Image
        source={trashIcon}
        style={[styles.icon, {width: iconSize, height: iconSize}]}
      />
      {cart.length > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badge}>{cart.length}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default observer(CartButton);

const styles = StyleSheet.create({
  iconContainer: {},
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 2,
    right: 0,
    backgroundColor: COLORS.red,
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 25,
  },
  badge: {
    fontWeight: 600,
    color: COLORS.white,
  },
});
