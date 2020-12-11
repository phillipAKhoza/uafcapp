import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default class LeadersScreen extends Component {
  render() {
    return (
      <View style={styles.overlayContainer}>
        <ScrollView>
          <View style={styles.top}>
            <Image
              style={styles.aboutimage}
              source={require('../../img/Lead.png')}
            />
            <Text style={styles.header}>HISTORY</Text>
            <Text style={styles.body}>
              {' '}
              In January 1912, while Pastor Brooke and his wife Edith serving
              the Lord and His people in Swansea, South Wales, as a Pastor of a
              Pentecostal Assembly, the call of God came upon him to leave
              homeland for service in South Africa. Although their lives were in
              the midst of many blessings from the Lord, in that souls were
              being saved, the sick healed and many baptised with the Holy
              Spirit. They were not disobedient to the heavenly vision, but with
              their two children left England and arrived in Johannesburg in
              1912. During just over ten years of ministry, the Lord graciously
              blessed their labours and in that time a number of assemblies were
              established among the white and the black community.
            </Text>

            <Text style={styles.header}>UAFC WESTSIDE LEADERSHIP</Text>
            <Text style={styles.body}>
              {' '}
              Leaders:Apostle Moses And Zanele Mabunda
            </Text>
            <Text style={styles.body}>
              {' '}
              Apostle Moses Mabunda is married to Zanele Mabunda.They are
              blessed with four children;Sibusiso,Ntokozo,Nomusa and
              Sindiswa.One boy and three girls. They love and live in Pretoria
              East,South Africa. He is a Senior Pastor at Westside Christian
              Fellowship Assembly and the General Overseer of the United
              Apostolic Faith Church in South and its subsidiary Regions and
              also a member of the Executive Coucil.Our main website is;
              www.uafctshwane.org.za
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: '#c2c1b7',
  },
  top: {},
  aboutimage: {
    height: 240,
    width: '95%',
    marginTop: 10,
    alignSelf: 'center',
  },
  header: {
    //color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  body: {
    // color: 'white',
    textAlign: 'center',

    marginTop: 3,
    fontSize: 19,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
  },
});
