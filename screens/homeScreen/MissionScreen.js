import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default class calendar extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../img/heart.jpg')}
        style={styles.container}>
        <View style={styles.overlayContainer}>
          <ScrollView>
            <View style={styles.top}>
              <Text style={styles.header}>VISION</Text>
              <Text style={styles.body}>
                To fulfil God’s Apostolic calling of extending the Kingdom of
                God with the Gospel and making disciples.
              </Text>
              <Text style={styles.header}>STRATEGY</Text>
              <Text style={styles.body}>WIN: – the lost</Text>
              <Text style={styles.body}>
                DISCIPLE: – the believers to walk and exercise Christian living
              </Text>
              <Text style={styles.body}>
                SEND: – raise men and women to the work of the ministry.
              </Text>
              <Text style={styles.header}>CONSTITUTION</Text>
              <Text style={styles.body}>
                The United Apostolic Faith Church in South Africa is governed by
                the South African Constitution.
              </Text>
              <Text style={styles.header}>STRUCTURE AND VALUES</Text>
              <Text style={styles.body}>
                To effectively raise and release the ministry gifts of the
                Apostle, Prophets, Evangelists, Teachers and Pastors to equip
                the Church for the work of the ministry. To ensure the
                well-being of all leaders on a spiritual, ministerial and
                emotional level by nurturing and honouring. Provide effective
                discipleship training for all men and women leaders and
                believers in doctrine, evangelism, and service. Release men and
                women by identifying and equipping them for works of service.
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
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  top: {},
  header: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    padding: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    color: 'white',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 17,
  },
});
