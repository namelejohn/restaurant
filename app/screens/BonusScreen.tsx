import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../styles/colors.ts';
import {observer} from 'mobx-react';
import {useStore} from '../stores/StoreContext.tsx';
import {BORDER_RADIUS} from '../styles/constants.ts';
import BackgroundContainer from '../components/BackgroundContainer.tsx';
import PrimaryButton from '../components/PrimaryButton.tsx';

interface EventScreenProps {
  navigation: any;
}

const BonusScreen: React.FC<EventScreenProps> = props => {
  const {productStore} = useStore();
  const {addLoyalty, error, loyaltyList, clearLoyalty} = productStore;
  const [isVisible, setIsVisible] = useState(false);
  const [code, setCode] = useState('');

  function showModal() {
    setIsVisible(true);
  }
  function closeModal() {
    setIsVisible(false);
  }

  function handleAddLoyalty(_code: string) {
    const res = addLoyalty(code);
    if (res) {
      setCode('');
      closeModal();
    }
  }

  function handleClearLoyalty() {
    clearLoyalty();
    closeModal();
  }

  function navToMenu() {
    props.navigation.navigate('MenuTab');
  }

  return (
    <BackgroundContainer>
      <SafeAreaView edges={['top']} style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.topTitle}>
            {'Accumulation card\nDish as a gift'}
          </Text>
          <View style={styles.topContainer}>
            <View style={styles.gridContainer}>
              {Array.from({length: 8}).map((_, index) => (
                <Pressable
                  onPress={showModal}
                  key={index}
                  style={[
                    styles.gridItem,
                    index === 7 && {backgroundColor: 'transparent'},
                  ]}>
                  {index < loyaltyList.length ? (
                    <Image source={require('../assets/check.png')} />
                  ) : index === 7 ? (
                    <Image
                      source={require('../assets/last_bonus_view.png')}
                      style={{
                        width: 80,
                        height: 80,
                        resizeMode: 'contain',
                        marginBottom: 10,
                      }}
                    />
                  ) : (
                    <Text style={styles.gridItemText}>{index + 1}</Text>
                  )}
                  {index === 0 && (
                    <Image
                      source={require('../assets/hat.png')}
                      style={{
                        position: 'absolute',
                        top: -width * 0.18,
                        left: -30,
                      }}
                      resizeMode="contain"
                    />
                  )}
                </Pressable>
              ))}
            </View>
          </View>

          <View>
            <Text style={styles.aboutTextTitle}>Description</Text>
            <Text style={styles.aboutText}>
              We are pleased to introduce our new bonus program “Tasty
              Memories”, which will make every visit to our restaurant even more
              memorable! Every 8th visit you can choose any dish from the menu.
            </Text>

            <Text style={styles.note}>Note: Updated every 3 months</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      {isVisible && (
        <ModalView
          addLoyalty={handleAddLoyalty}
          code={code}
          setCode={setCode}
          close={closeModal}
          error={error}
          isFull={loyaltyList.length === 7}
          reset={handleClearLoyalty}
        />
      )}
    </BackgroundContainer>
  );
};

export default observer(BonusScreen);

const ModalView = ({
  close,
  code,
  setCode,
  addLoyalty,
  error,
  isFull,
  reset,
}: any) => {
  return (
    <View style={styles.modalWrapContainer}>
      <View style={styles.modalContainer}>
        {isFull ? (
          <PrimaryButton
            title={'Reset'}
            onPress={reset}
            containerStyle={styles.modalButton}
          />
        ) : (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize={'none'}
                style={styles.input}
                placeholder="Enter code"
                placeholderTextColor={COLORS.grayText}
                value={code}
                onChangeText={setCode}
              />
            </View>
            <Text style={styles.invalidCode}>
              {error ? 'Invalid code' : ''}
            </Text>
            <PrimaryButton
              onPress={() => addLoyalty(code)}
              title={'Ok'}
              containerStyle={styles.modalButton}
            />
            <PrimaryButton
              title={'Cancel'}
              onPress={close}
              containerStyle={styles.modalButton}
            />
          </>
        )}
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  cardContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 20,
  },
  cardTitle: {
    color: COLORS.white,
    fontWeight: 700,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  aboutTextTitle: {
    color: COLORS.secondary,
    marginLeft: 30,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 300,
  },
  aboutText: {
    color: '#FFF589',
    fontSize: 20,
    fontWeight: 300,
    marginHorizontal: 30,
    marginTop: 10,
  },
  note: {
    color: 'rgba(255, 234, 0, 0.3)',
    fontSize: 15,
    fontWeight: 300,
    marginLeft: 30,
    marginTop: 8,
  },
  listText: {
    fontSize: 16,
    fontWeight: 600,
    color: COLORS.textColor,
    marginLeft: 20,
    marginVertical: 10,
  },
  itemContainer: {
    marginHorizontal: 20,
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemSubTitle: {
    color: COLORS.grayText,
    marginVertical: 10,
  },
  listTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 40,
    marginLeft: 20,
  },
  modalButton: {
    marginBottom: 10,
    width: '100%',
  },
  inputContainer: {
    height: 55,
    width: '100%',
    borderRadius: 25,
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  invalidCode: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 4,
    color: COLORS.error,
  },
  input: {
    flex: 1,
    color: COLORS.white,
    paddingHorizontal: 20,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayText,
    margin: 8,
  },
  refContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS,
    width: '90%',
    backgroundColor: COLORS.white,
    marginVertical: 12,
    marginHorizontal: 20,
  },
  close: {
    width: 16,
    height: 16,
  },
  refText: {
    width: '92%',
  },
  button: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  topContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 14,
  },
  presentIcon: {
    width: 198,
    height: 198,
  },
  presentItemContainer: {
    backgroundColor: COLORS.transparentBg,
    width: 115,
    height: 122,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 20,
    gap: 20,
    paddingVertical: 14,
    flexWrap: 'wrap',
  },
  gridItem: {
    width: 70,
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
  },
  checkIcon: {
    width: 32,
    height: 32,
  },
  giftIcon: {
    width: 70,
    height: 70,
    tintColor: COLORS.primary,
  },
  modalWrapContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 99999,
    elevation: 1000,
    width: width,
    height: height,
    paddingHorizontal: 8,
  },
  modalContainer: {
    backgroundColor: COLORS.red,
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 40,
  },
  title: {
    fontWeight: 600,
    color: COLORS.white,
  },
  freeBurger: {
    textAlign: 'center',
    color: '#4E0404',
    fontSize: 15,
    fontWeight: '600',
  },
  freeBurgerContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#FFD4D4',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'space-between',
  },
  date: {
    marginTop: 10,
    color: COLORS.grayText,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  topTitle: {
    fontSize: 30,
    color: '#FFF589',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 30,
  },
  gridItemText: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 36,
    fontWeight: 600,
  },
});
