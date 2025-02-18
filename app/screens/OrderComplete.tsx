import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import COLORS from '../styles/colors.ts';
import CustomButton from '../components/PrimaryButton.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../components/BackgroundContainer.tsx';
import {useStore} from '../stores/StoreContext.tsx';
import {CartItem} from '../stores/store.ts';
import {BORDER_RADIUS, FONT_WEIGHT} from '../styles/constants.ts';

function generateOrderSummary(cartItems: CartItem[]) {
  const itemsText = cartItems
    .map(
      (item: any) =>
        `${item.name} - ${item.quantity} шт. - $${item.price * item.quantity}`,
    )
    .join('\n');

  return `${itemsText}`;
}

const OrderComplete = ({navigation}: any) => {
  const {productStore} = useStore();
  const {cart, clearCart} = productStore;

  const qrCodeValue = generateOrderSummary(cart);

  function navigateToMenu() {
    navigation.navigate('Menu');
    clearCart();
  }

  return (
    <MyImageBg>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.successText}>
            {'Your order has been\nsuccessfully placed!'}
          </Text>

          <View style={styles.qrContainer}>
            <QRCode
              backgroundColor={'transparent'}
              value={qrCodeValue}
              size={140}
              color={COLORS.textColor}
            />
          </View>
        </View>
      </SafeAreaView>
      <View style={{alignItems: 'center', paddingBottom: 50}}>
        <CustomButton
          onPress={navigateToMenu}
          title={'Back to menu'}
          containerStyle={styles.buttonContainer}
        />
      </View>
    </MyImageBg>
  );
};

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
  },
  successText: {
    color: COLORS.textColor,
    fontSize: 24,
    fontWeight: FONT_WEIGHT,
    textAlign: 'center',
  },
  qrContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
  },
  contentContainer: {
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  successIcon: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 100,
    zIndex: 9999,
  },
  catImg: {
    width: 400,
    resizeMode: 'contain',
    position: 'absolute',
    top: -height * 0.15,
    left: -180,
  },
});

export default OrderComplete;
