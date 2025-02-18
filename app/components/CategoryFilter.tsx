import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {filterData} from '../data/data.ts';
import COLORS from '../styles/colors.ts';
import {FONT_WEIGHT} from '../styles/constants.ts';

const CategoryFilter = ({
  activeFilter,
  onSelect,
}: {
  activeFilter: any;
  onSelect: (filter: any) => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.gradientBackground}>
        {filterData.map(filter => (
          <View key={filter.id} style={styles.filterContainer}>
            <Pressable
              onPress={() => onSelect(filter)}
              style={[
                styles.filterButton,
                activeFilter.name === filter.name && styles.activeFilterButton,
              ]}>
              <Text
                style={[
                  styles.filterText,
                  activeFilter.name === filter.name && styles.activeFilterText,
                ]}>
                {filter.name}
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 6,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 234, 0, 0.7)',
  },
  gradientBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 3,
    borderRadius: 32,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 40,
    alignItems: 'center',
  },
  activeFilterButton: {
    alignItems: 'center',
    borderColor: 'rgba(255, 183, 0, 0.36)',
    borderWidth: 1,
  },
  activeFilter: {
    backgroundColor: COLORS.primary,
  },
  filterText: {
    color: COLORS.textColor,
    fontSize: 13,
    fontWeight: FONT_WEIGHT,
  },
  activeFilterText: {
    color: '#FFB700',
  },
  filterTextActive: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: FONT_WEIGHT,
    padding: 4,
  },
});

export default CategoryFilter;
