import * as React from 'react';
import {Button, Text, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const notifivation = <Icon name="bell" size={30} color="#900" />;
class event extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const food = this.props.navigation.getParam('food');
    //const notification = this.props.route.params?.notification;
    const calendar = this.props.route.params?.calendar;

    console.log(calendar);
    // console.log(food);

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{calendar.event}</Text>
        <Text style={styles.categoryText}>{calendar.message}</Text>
        <Text style={styles.categoryText}>date: {calendar.date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 27,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },

  categoryText: {
    fontSize: 20,
    marginBottom: 32,
    //textAlign: 'center',
    paddingLeft: 15,
    paddingLeft: 10,
  },

  container: {
    alignItems: 'center',
  },
});

export default event;
