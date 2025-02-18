import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import COLORS from '../styles/colors.ts';

interface CustomInputProps extends TextInputProps {
  label?: string;
  icon?: any;
  containerStyle?: ViewStyle;
}

const StyledInput: React.FC<CustomInputProps> = ({label, ...props}) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {props.icon && <Image source={props.icon} style={styles.icon} />}
        <TextInput
          {...props}
          style={styles.input}
          placeholderTextColor={'rgba(0, 0, 0, 0.8)'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: 500,
    color: COLORS.secondary,
    marginLeft: 10,
    marginBottom: 6,
    alignSelf: 'flex-start',
    borderRadius: 24,
    padding: 6,
    paddingVertical: 2,
    zIndex: 99999,
  },
  inputContainer: {
    height: 47,
    borderRadius: 33,
    backgroundColor: COLORS.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: {
    fontSize: 16,
    fontWeight: 700,
    color: COLORS.black,
    paddingBottom: 8,
    marginLeft: 4,
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
});

export default StyledInput;
