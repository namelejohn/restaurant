import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {observer} from 'mobx-react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackgroundContainer from '../components/BackgroundContainer.tsx';
import {eventData} from '../data/data.ts';
import {Event} from '../types';
import COLORS from '../styles/colors.ts';

interface MenuScreenProps {
  navigation: any;
}

const eventImages: any = {
  0: require('../assets/event1.png'),
  1: require('../assets/event2.png'),
  2: require('../assets/event3.png'),
};

const EventSettings: React.FC<MenuScreenProps> = props => {
  function navToEvent(id: number) {
    props.navigation.navigate('Event', {id});
  }

  function renderItem({item, index}: {item: Event; index: number}) {
    return (
      <Pressable onPress={() => navToEvent(item.id)}>
        <ImageBackground
          style={styles.cardContainer}
          source={eventImages[item.id]}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.subtitleContainer}>
              <Image
                source={require('../assets/calendar.png')}
                style={styles.icon}
              />
              <Text style={styles.subtitle}>{item.date}</Text>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    );
  }

  return (
    <BackgroundContainer>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <View style={styles.menuContainer}>
          <FlatList
            data={eventData}
            keyExtractor={(_, index: number) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.flatlistContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 70,
  },

  menuContainer: {
    flex: 1,
  },
  flatlistContainer: {
    paddingTop: 50,
    paddingBottom: 100,
    marginHorizontal: 20,
  },
  subtitle: {
    color: COLORS.secondary,
    fontSize: 14,
    marginLeft: 4,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 4,
    backgroundColor: '#242424',
    borderWidth: 1,
    borderColor: COLORS.secondary,
    width: '95%',
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  cardContainer: {
    width: '100%',
    height: 190,
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  title: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: 300,
  },
  top: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: 600,
  },
  topContainer: {
    backgroundColor: COLORS.red,
    paddingVertical: 4,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    tintColor: COLORS.secondary,
  },
});

export default observer(EventSettings);
