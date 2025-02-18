import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../styles/colors';
import {FONT_WEIGHT} from '../styles/constants.ts';

interface HorizontalCounterProps {
  value: number;
  plus: () => void;
  minus: () => void;
  isHorizontal?: boolean;
}

const QuantitySelector: React.FC<HorizontalCounterProps> = ({
  value = 0,
  plus,
  minus,
  isHorizontal = true,
}) => {
  return (
    <View style={[styles.container, isHorizontal && {flexDirection: 'row'}]}>
      <TouchableOpacity
        hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
        onPress={minus}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.valueContainer}>
        <Text
          style={[
            styles.valueText,
            isHorizontal && {marginHorizontal: 16, marginVertical: 0},
          ]}>
          {value}
        </Text>
      </View>

      <TouchableOpacity
        hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
        onPress={plus}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    alignSelf: 'flex-start',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 2,
  },
  button: {
    borderRadius: 10,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '700',
    color: COLORS.black,
  },
  valueContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    color: COLORS.black,
    fontWeight: FONT_WEIGHT,
  },
  buttonLeft: {},
  leftBtnText: {
    color: COLORS.red,
  },
});

export default QuantitySelector;
