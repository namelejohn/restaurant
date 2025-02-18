import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../styles/colors.ts';
import BackgroundContainer from '../components/BackgroundContainer.tsx';
import {broadcastData} from '../data/data.ts';
import {Match} from '../types';
import {FONT_WEIGHT} from '../styles/constants.ts';

const UpcomingEvents = ({navigation}: any) => {
  function renderItem({item: match}: {item: Match}) {
    return (
      <View style={styles.matchContainer}>
        <View style={styles.leagueBadge}>
          <Text style={styles.leagueText}>{match.league}</Text>
          <Text style={styles.dateTime}>
            {match.date} - {match.time}
          </Text>
        </View>
        <View style={styles.teamInfo}>
          <Text style={styles.teamName}>{match.team1}</Text>
          <Text style={[styles.teamName, {marginTop: 8}]}>{match.team2}</Text>
        </View>
      </View>
    );
  }

  return (
    <BackgroundContainer>
      <SafeAreaView edges={['top']} style={styles.container}>
        <Text style={styles.title}>Спортивные трансляции</Text>
        <View style={styles.container}>
          <FlatList
            data={broadcastData}
            keyExtractor={(item: any, index: number) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/app_logo.png')}
            style={styles.icon}
          />
        </View>
      </SafeAreaView>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    color: COLORS.black,
    marginLeft: 20,
    paddingTop: 70,
    paddingBottom: 10,
  },
  buttonContainer: {
    marginBottom: 40,
    marginTop: 10,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  linearContainer: {
    alignItems: 'center',
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    backgroundColor: COLORS.inputBg,
    marginBottom: 12,
    marginHorizontal: 16,
  },
  leagueBadge: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  leagueText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.red,
  },
  dateTime: {
    fontWeight: 'bold',
    color: COLORS.textColor,
    marginTop: 4,
  },
  teamInfo: {
    flex: 1,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 16,
    fontWeight: FONT_WEIGHT,
    color: COLORS.textColor,
    fontStyle: 'italic',
  },
  icon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    zIndex: -1,
  },
  iconContainer: {
    width: '100%',
    marginBottom: 40,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
});

export default UpcomingEvents;
