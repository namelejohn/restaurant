import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackgroundContainer from '../components/BackgroundContainer.tsx';
import {INPUT_BORDER_RADIUS} from '../styles/constants.ts';
import StyledInput from '../components/StyledInput.tsx';
import PrimaryButton from '../components/PrimaryButton.tsx';

const ContactUs = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate('Menu');
  };

  function navToMenu() {
    navigation.goBack();
  }

  return (
    <BackgroundContainer>
      <SafeAreaView edges={['top']} style={styles.container}>
        <Formik
          initialValues={{
            phone: '',
            address: '',
            date: '',
            index: '',
            time: '',
          }}
          onSubmit={handleSubmit}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <View style={styles.formContainer}>
              <StyledInput
                label={'Enter name'}
                placeholder="Enter name"
                value={values.address}
                onChangeText={handleChange('address')}
              />
              <StyledInput
                label={'Number'}
                placeholder="Enter phone number"
                value={values.phone}
                keyboardType={'number-pad'}
                onChangeText={handleChange('phone')}
              />
              <StyledInput
                label={'Enter table number'}
                placeholder="Enter table number"
                value={values.index}
                keyboardType={'number-pad'}
                onChangeText={handleChange('index')}
              />
              <View>
                <Text style={styles.label}>Enter time and date</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <StyledInput
                    placeholder="HH.MM"
                    value={values.time}
                    keyboardType={'number-pad'}
                    onChangeText={handleChange('time')}
                    icon={require('../assets/time.png')}
                    containerStyle={{width: '49%'}}
                  />
                  <StyledInput
                    placeholder="DD.MM.YY"
                    value={values.date}
                    keyboardType={'number-pad'}
                    onChangeText={handleChange('date')}
                    icon={require('../assets/calendar.png')}
                    containerStyle={{width: '49%'}}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </SafeAreaView>
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          width: '100%',
          marginBottom: 30,
        }}>
        <PrimaryButton onPress={navToMenu} title={'Back to menu'} />
      </View>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    padding: 15,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },

  messageInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  headerText: {
    fontSize: 40,
    fontWeight: '900',
    color: COLORS.white,
    marginLeft: 20,
    marginVertical: 20,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: COLORS.secondary,
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 18,
    marginTop: 12,
  },
  inputContainer: {
    height: 55,
    borderRadius: INPUT_BORDER_RADIUS,
    borderColor: COLORS.secondary,
    overflow: 'hidden',
    paddingHorizontal: 10,
    backgroundColor: COLORS.inputBg,
  },
  input: {
    flex: 1,
    color: COLORS.black,
    paddingHorizontal: 20,
    fontStyle: 'italic',
  },
  topTitle: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 20,
  },
  icon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  iconContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    zIndex: -1,
  },
});

export default ContactUs;
