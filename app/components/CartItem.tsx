import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {observer} from 'mobx-react';
import {useStore} from '../stores/StoreContext';
import QuantitySelector from './QuantitySelector';
import COLORS from '../styles/colors';
import {FONT_WEIGHT} from '../styles/constants';
import {Product} from '../types';

interface ItemViewProps {
  item: Product;
}

const CartItem: React.FC<ItemViewProps> = ({item}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../assets/heart.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>

        <View style={styles.actionsContainer}>
          <QuantitySelector
            isHorizontal
            value={quantity}
            plus={() => handlePlus(item)}
            minus={() => handleMinus(item.id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  imageContainer: {
    width: '34%',
  },
  image: {
    width: 120,
    height: 90,
    borderRadius: 20,
    borderColor: COLORS.secondary,
    borderWidth: 2,
  },
  contentContainer: {
    width: '66%',
    alignItems: 'flex-start',
    paddingLeft: 12,
  },
  infoContainer: {
    width: '100%',
  },
  name: {
    fontSize: 16,
    fontWeight: FONT_WEIGHT,
    color: COLORS.textColor,
  },
  price: {
    color: COLORS.textColor,
    fontWeight: FONT_WEIGHT,
    marginTop: 4,
  },
  total: {
    color: COLORS.textColor,
    fontWeight: FONT_WEIGHT,
  },
  actionsContainer: {
    width: '100%',
    marginTop: 8,
  },
  totalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: 90,
  },
  deleteContainer: {
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    marginBottom: 20,
    borderRadius: 16,
  },
  deleteIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  iconContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 30,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 3,
    zIndex: 99999,
    position: 'absolute',
    right: 16,
    top: 8,
  },
});

export default observer(CartItem);
