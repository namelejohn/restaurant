import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {observer} from 'mobx-react-lite';
import {useStore} from '../stores/StoreContext.tsx';
import BackgroundContainer from '../components/BackgroundContainer.tsx';
import CartItemView from '../components/CartItem.tsx';
import COLORS from '../styles/colors.ts';
import PrimaryButton from '../components/PrimaryButton.tsx';
import {FONT_WEIGHT} from '../styles/constants.ts';
import MyHeader from '../components/AppHeader.tsx';

const emptyIcon = require('../assets/empty.png');
const Checkout = ({navigation}: any) => {
  const {productStore} = useStore();
  const {cart, cartTotal} = productStore;
  const isEmpty = cart.length === 0;
  const commissionRate = 10;

  const commission = (cartTotal * commissionRate) / 100;

  const navigateToConfirmScreen = () => {
    navigation.navigate('Order');
  };
  const navigateToShop = () => {
    navigation.navigate('Shop');
  };

  return (
    <BackgroundContainer>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <View style={styles.container}>
          <FlatList
            data={cart}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CartItemView item={item} />}
            contentContainerStyle={{paddingBottom: 100, paddingTop: 20}}
            ListEmptyComponent={
              <EmptyCartView navigateToShop={navigateToShop} />
            }
          />
        </View>
        <View style={styles.buttonContainer}>
          {!isEmpty && (
            <>
              <View style={styles.footer}>
                <Text style={styles.footerText}>Subtotal</Text>
                <Text style={styles.footerText}>${cartTotal}</Text>
              </View>
              <View style={styles.footer}>
                <Text style={styles.footerText}>Commission</Text>
                <Text style={styles.footerText}>{commissionRate}%</Text>
              </View>
              <View style={styles.footer}>
                <Text style={styles.footerText}>Total</Text>
                <Text style={styles.footerText}>${cartTotal + commission}</Text>
              </View>
            </>
          )}
          <PrimaryButton
            onPress={isEmpty ? navigateToShop : navigateToConfirmScreen}
            title={isEmpty ? 'Add Product' : 'Order'}
            containerStyle={styles.button}
          />
        </View>
      </SafeAreaView>
    </BackgroundContainer>
  );
};

const EmptyCartView = ({navigateToShop}: any) => {
  return (
    <View style={styles.emptyCartContainer}>
      <Image source={emptyIcon} style={styles.emptyIcon} />
      <Text style={styles.emptyCartText}>{'Your cart is empty'}</Text>
      <Text style={styles.emptyCartText}>
        {'Choose the first course on the menu'}
      </Text>
    </View>
  );
};

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'right',
  },
  removeText: {
    color: COLORS.error,
    textAlign: 'right',
  },
  emptyCartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  emptyCartIcon: {
    width: 100,
    height: 100,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.white,
  },
  bottomContainer: {
    ...Platform.select({
      android: {
        paddingBottom: 20,
      },
    }),
    paddingTop: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  emptyCartText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: FONT_WEIGHT,
    color: COLORS.textColor,
    textAlign: 'center',
  },
  emptyCartSubText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#4E2317',
    opacity: 0.5,
    fontWeight: 500,
    marginTop: 10,
  },
  emptyIcon: {
    width: width / 2,
    height: width / 2,
    marginTop: 40,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(5, 5, 5, 0.03)',
    paddingVertical: 10,
  },
  cartLengthText: {
    color: COLORS.black,
  },
  headerRight: {
    marginRight: 10,
  },
  headerRightTitle: {
    fontSize: 16,
  },
  cartHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 6,
  },
  cartHeaderTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  totalAmount: {
    color: COLORS.primary,
  },
  footer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 500,
    color: COLORS.textColor,
    marginBottom: 4,
    alignSelf: 'center',
  },
  deleteAllText: {
    color: COLORS.white,
    fontWeight: FONT_WEIGHT,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.white,
    marginLeft: 20,
    marginBottom: 10,
  },
  button: {
    marginBottom: 30,
    marginTop: 10,
  },
});

export default observer(Checkout);
