import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default class calendar extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../img/sermon.png')}
        style={styles.container}>
        <View style={styles.overlayContainer}>
          <ScrollView>
            <View style={styles.top}>
              <Text style={styles.header}>HISTORY</Text>
              <Text style={styles.body}>
                {' '}
                In January 1912, while Pastor Brooke and his wife Edith serving
                the Lord and His people in Swansea, South Wales, as a Pastor of
                a Pentecostal Assembly, the call of God came upon him to leave
                homeland for service in South Africa. Although their lives were
                in the midst of many blessings from the Lord, in that souls were
                being saved, the sick healed and many baptised with the Holy
                Spirit. They were not disobedient to the heavenly vision, but
                with their two children left England and arrived in Johannesburg
                in 1912. During just over ten years of ministry, the Lord
                graciously blessed their labours and in that time a number of
                assemblies were established among the white and the black
                community.
              </Text>
              <Text style={styles.header}>DOCTRINE</Text>
              <Text style={styles.body}>
                {' '}
                We believe that God is the original creator of all things,
                Himself eternally existent, without beginning or end
                (Exodus3:14) He is Omnipotent (Mathew 19:26); Omniscient (Psalm
                147: 5) Omnipresent (Psalm 139: 3-10) and Holy (Leviticus 19:2)
                God is Spirit (John 4:24) and no mortal man has ever seen Him or
                can see Him (1Timothy 6:16). We know Him through His Word in
                which He has revealed Himself and made Himself known to man. We
                believe that all Scripture as contained in the Old and New
                Testament is the complete Word of God (2 Timothy 3: 16 &
                17).Jesus Christ believed in and expounded “all the Scriptures
                “(Luke 24: 25 & 27). We believe that there is one God Who exists
                in three Persons: God the Father, God the Son and God the Holy
                Spirit. Although the Father is God, the Son is God and the Holy
                Spirit is God, yet the Son is not the Father, the Holy Spirit is
                not the Father and the Son is not the Holy Spirit, each is a
                separate person.
              </Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
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
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  top: {},

  menuConatiner: {
    height: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  header: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  body: {
    color: 'white',
    padding: 10,
    marginTop: 5,
    fontSize: 19,
  },
});
