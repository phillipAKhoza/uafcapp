import * as React from 'react';
import {Button, Text, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const notifivation = <Icon name="bell" size={30} color="#900" />;
class update extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const food = this.props.navigation.getParam('food');
    const notification = this.props.route.params?.notification;

    console.log(notification);
    // console.log(food);

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{notification.name}</Text>
        <Text style={styles.categoryText}>{notification.update}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 27,
    marginBottom: 20,
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

export default update;
