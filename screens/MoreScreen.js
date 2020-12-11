import * as React from 'react';
import {
  Button,
  Alert,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function MoreScreen(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity  onPress={() => {
              props.navigation.navigate('Profile');
            }}>
          <View style={styles.profile}>
            <Icon style={styles.icon} name="users" size={25} color="black" />
            <Text style={styles.text}>YOUR PROFILE</Text>
          </View>
        </TouchableOpacity>

        <View>
          <TouchableOpacity>
            <View style={styles.serve}>
              <Icon
                style={styles.icon}
                name="heartbeat"
                size={25}
                color="black"
              />
              <Text style={styles.text}> SERVE</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Our Foundations');
            }}>
            <View style={styles.serve}>
              <Icon
                style={styles.icon}
                name="heartbeat"
                size={25}
                color="black"
              />
              <Text style={styles.text}>UAFC FOUNDATION</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Technical');
          }}>
          <View style={styles.technical}>
            <Icon style={styles.icon} name="comments" size={25} color="black" />
            <Text style={styles.text}>TECHNICAL SUPPORT</Text>
          </View>
        </TouchableOpacity>

        <View>
          <TouchableOpacity>
            <View style={styles.policy}>
              <Icon
                style={styles.icon}
                name="info-circle"
                size={25}
                color="black"
              />
              <Text style={styles.text}>PRIVACY POLICY</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.policy}>
              <Icon
                style={styles.icon}
                name="info-circle"
                size={25}
                color="black"
              />
              <Text style={styles.text}>TERMS OF USE</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.version}>V:1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    // flexDirection: 'column',
    //justifyContent: 'space-between',
  },
  profile: {
    height: 100,
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  serve: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  technical: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 30,
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  policy: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  version: {
    marginTop: 20,
    marginBottom: 20,
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19,
    color: 'grey',
  },
  item: {
    padding: 20,
    borderColor: 'white',
    borderWidth: 2,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    borderBottomColor: 'grey',
    alignItems: 'stretch',
    // justifyContent: 'space-between',

    // flexDirection: 'row',
  },
  icon: {
    margin: 15,
  },

  arrow: {
    left: 200,
  },
});
