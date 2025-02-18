import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import BackgroundContainer from '../components/BackgroundContainer.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import {eventData} from '../data/data.ts';
import PrimaryButton from '../components/PrimaryButton.tsx';

interface MenuScreenProps {
  navigation: any;
  route: any;
}

const eventImages: any = {
  0: require('../assets/event1.png'),
  1: require('../assets/event2.png'),
  2: require('../assets/event3.png'),
};

const EventInfo: React.FC<MenuScreenProps> = props => {
  const {params} = props.route;
  const id = params?.id;
  const item = eventData[id];
  return (
    <BackgroundContainer>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <Image style={styles.image} source={eventImages[id]} />
        <View style={styles.container}>
          <Text style={styles.about}>{item.title}</Text>
          <Text style={styles.text}>{item.detail}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.about}>Time and date</Text>
          <Text style={styles.text}>{item.date}</Text>
        </View>
      </SafeAreaView>
      <PrimaryButton
        onPress={props.navigation.goBack}
        title={'Back to events'}
        containerStyle={{alignSelf: 'center', marginBottom: 30}}
      />
    </BackgroundContainer>
  );
};

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: width * 0.8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: 200,
    lineHeight: 22,
    color: COLORS.textColor,
    textAlign: 'justify',
    marginHorizontal: 20,
  },
  bottomText: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 20,
  },
  titleContainer: {
    position: 'absolute',
    bottom: -30,
    backgroundColor: COLORS.white,
    width: '90%',
    paddingVertical: 10,
    borderRadius: 16,
    paddingLeft: 20,
    alignSelf: 'center',
  },
  title: {
    color: COLORS.textColor,
    fontSize: 18,
    fontWeight: 500,
  },
  subtitle: {
    marginTop: 4,
    color: '#8D8D8D',
    fontSize: 12,
    fontWeight: 600,
  },
  thirdTitle: {
    marginTop: 4,
    color: '#6564DB',
    fontSize: 14,
    fontWeight: 500,
  },
  about: {
    fontWeight: 700,
    fontSize: 20,
    color: COLORS.textColor,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default observer(EventInfo);
