import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../styles/colors.ts';
import {isAndroid} from '../styles/constants.ts';
import {observer} from 'mobx-react';

const AppHeader = ({
  title,
  showMenu = false,
  showBack = false,
  rightItem = null,
}: {
  title: string;
  showMenu?: boolean;
  showBack?: boolean;
  rightItem?: React.ReactNode;
}) => {
  const navigation: any = useNavigation();

  function navToMenu() {
    navigation.navigate('Menu');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {showBack && (
            <Pressable onPress={navigation.goBack} style={styles.backBtn}>
              <Image
                source={require('../assets/back.png')}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  marginLeft: 0,
                }}
              />
              <Text
                style={{
                  color: COLORS.secondary,
                  fontSize: 17,
                  marginLeft: 4,
                }}>
                Back
              </Text>
            </Pressable>
          )}
          {showMenu && (
            <Pressable onPress={navToMenu}>
              <Image
                source={require('../assets/menu.png')}
                style={{
                  width: 26,
                  height: 26,
                  resizeMode: 'contain',
                  marginLeft: 10,
                }}
              />
            </Pressable>
          )}
        </View>
        <View style={styles.headerTitleContainer}>
          <Text
            style={[
              styles.headerTitle,
              !!rightItem && {marginLeft: width * 0.07},
            ]}>
            {title}
          </Text>
        </View>
        <View style={[styles.cartContainer, !rightItem && {width: '18%'}]}>
          {rightItem && rightItem}
        </View>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.headerBg,
    width: width,
    height: width * (isAndroid ? 0.24 : 0.28),
    justifyContent: 'flex-end',
    paddingBottom: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
  },
  backIcon: {
    width: 52,
    height: 52,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 500,
    color: COLORS.secondary,
    marginLeft: width * 0.01,
  },
  headerTitleContainer: {
    width: '50%',
    alignItems: 'center',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '24%',
  },
  cartButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FF00FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 18,
    height: 18,
    backgroundColor: 'orange',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnTitle: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
});

export default observer(AppHeader);
