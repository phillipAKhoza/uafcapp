import * as React from 'react';
import {
  Button,
  Alert,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Header} from 'react-native/Libraries/NewAppScreen';

export default function LocationScreen() {
  return (
    <View>
      <ScrollView>
        <View style={styles.back}>
          <Text
            style={styles.item}
            onPress={() =>
              Alert.alert(
                'UAFC WESTSIDE',
                'LOCATION: 313 Frederick St, Pretoria West',
              )
            }>
            UAFC WESTSIDE {'  '}
            <Icon
              style={styles.location}
              name="map-marker-alt"
              size={25}
              color="black"
            />
          </Text>
          <Text
            style={styles.item}
            onPress={() =>
              Alert.alert(
                'UAFC SUNNYSIDE',
                'LOCATION: 63 Celliers St, Sunnyside, Pretria 0002 ',
              )
            }>
            UAFC SUNNYSIDE
          </Text>
          <Text
            style={styles.item}
            onPress={() =>
              Alert.alert(
                'UAFC RIVERSIDE',
                'LOCATION: 10413 David Lukhele St, Mamelodi-S&S, Pretoria',
              )
            }>
            UAFC RIVERSIDE
          </Text>
          <Text
            style={styles.item}
            onPress={() =>
              Alert.alert(
                'UAFC SLOVO GARDENS',
                'LOCATION: Maganyogan st,Winterveld 0198',
              )
            }>
            UAFC SLOVO
          </Text>
          <Text
            style={styles.item}
            onPress={() =>
              Alert.alert(
                'UAFC SOSHANGUVE H',
                'LOCATION: 961 block H Soshanguve, Pretoria 0152',
              )
            }>
            UAFC SOSHANGUVE H
          </Text>
          <Text
            style={styles.item}
            onPress={() =>
              Alert.alert(
                'UAFC SOSHANGUVE Y',
                'LOCATION: 426 block Y Soshanguve, Pretoria 0152',
              )
            }>
            UAFC SOSHANGUVE Y
          </Text>
          <Text
            style={styles.item}
            onPress={() =>
              Alert.alert(
                'UAFC SOSHANGUVE GG',
                'LOCATION: 647 block GG Soshanguve, Pretoria 0152',
              )
            }>
            UAFC SOSHANGUVE GG
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 35,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'white',
    margin: 2,
    fontSize: 17,
    fontWeight: 'bold',
    justifyContent: 'space-between',

    flexDirection: 'row',
  },
  location: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  back: {
    backgroundColor: 'grey',
  },
});
