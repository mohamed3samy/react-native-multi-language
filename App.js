import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {useTranslation} from 'react-i18next';

import './Translations';

const App = () => {
  const {t, i18n} = useTranslation();

  const changeLangToTr = () => i18n.changeLanguage('tr');

  const changeLangToEn = () => i18n.changeLanguage('en');

  return (
    <SafeAreaView>
      <View style={styles.baseContainer}>
        <Text style={styles.title}>{t('home.title')}</Text>
        <Text style={styles.desc}>{t('home.description')}</Text>

        <View style={{marginTop: 20}}>
          <Pressable style={styles.pressable} onPress={changeLangToTr}>
            <Text style={{color: 'white'}}>{t('home.buttonTr')}</Text>
          </Pressable>
          <Pressable
            style={{...styles.pressable, marginTop: 10}}
            onPress={changeLangToEn}>
            <Text style={{color: 'white'}}>{t('home.buttonEn')}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  baseContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  desc: {
    fontSize: 18,
    color: 'black',
  },
  pressable: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
