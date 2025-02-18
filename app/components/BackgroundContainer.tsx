import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import COLORS from '../styles/colors.ts';

interface ScreenBgProps {
  children?: React.ReactNode;
  isMenu?: boolean;
}

const BackgroundContainer = ({children}: ScreenBgProps) => {
  const source: any = require('../assets/main_bg.png');

  return (
    <ImageBackground
      source={source}
      style={styles.backgroundImage}
      resizeMode={'cover'}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundContainer;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.screenBg,
  },
});
