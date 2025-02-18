import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {Product} from '../types';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductCard from '../components/ProductCard.tsx';
import BackgroundContainer from '../components/BackgroundContainer.tsx';
import CategoryFilter from '../components/CategoryFilter.tsx';
import CartButton from '../components/CartButton.tsx';

interface HomeScreenProps {
  navigation: any;
}

const ItemCatalog: React.FC<HomeScreenProps> = props => {
  const {productStore} = useStore();
  const {loadProducts, filteredProducts, activeFilter, setFilter, setSearch} =
    productStore;

  useEffect(() => {
    loadProducts();
  }, []);

  const renderItem = ({item}: {item: Product}) => <ProductCard item={item} />;

  function navToMenu() {
    props.navigation.navigate('Menu');
  }

  function navToCart() {
    props.navigation.navigate('CartStack');
  }

  return (
    <BackgroundContainer>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <ImageBackground
          source={require('../assets/home_header_bg.png')}
          style={styles.headerContainer}>
          <Pressable onPress={navToMenu}>
            <Image
              source={require('../assets/menu.png')}
              style={styles.headerIcon}
            />
          </Pressable>
          <Pressable onPress={navToCart}>
            <Image
              source={require('../assets/cart.png')}
              style={styles.headerIcon}
            />
          </Pressable>
        </ImageBackground>
        <CategoryFilter activeFilter={activeFilter} onSelect={setFilter} />
        <FlatList
          data={filteredProducts}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          columnWrapperStyle={{justifyContent: 'space-evenly'}}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 20,
  },
  container: {
    paddingTop: 10,
    paddingBottom: 200,
  },
  image: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    color: 'gray',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#5C0DAC',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  columnContainer: {
    justifyContent: 'space-evenly',
  },
  filterText: {
    fontSize: 16,
    lineHeight: 16,
    color: COLORS.white,
    fontWeight: '600',
    margin: 20,
  },
  headerImgContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  cartBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  cartBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 6,
  },
  cartBtnWrapContainer: {
    marginRight: 8,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  cartIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.primary,
    marginHorizontal: 20,
    marginBottom: 16,
    height: 50,
  },
  headerIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  headerContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});

export default observer(ItemCatalog);
