import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const splash = ({navigation}) => {
  useEffect(() => {
    console.log('Splash first');
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <View style={styles.home}>
      <Image style={styles.img} source={require('../img/logo1.png')} />
    </View>
  );
};
export default splash;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  img: {
    width: '100%',
    height: 200,
  },
});
