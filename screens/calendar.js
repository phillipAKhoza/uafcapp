import * as React from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {ListItem, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {/*getNotifications*/ getCalender, addFood} from '../api/CalendarApi';
import update from './update';
import Spinner from 'react-native-loading-spinner-overlay';

export default class calendar extends React.Component {
  state = {
    // foodList: [],
    //notificationList: [],
    calendarList: [],
    // curentFoodItem: null,
    selectedIndex: 0,
    spinner: true,
  };
  constructor(props) {
    super(props);
  }
  onFoodAdded = (food) => {
    console.log('Food Added');
    console.log(food);
  };

  /* onFoodsReceived = (foodList) => {
    this.setState((prevState) => ({
      foodList: (prevState.foodList = foodList),
    }));
  };

  onNotificationsReceived = (notificationList, spinner) => {
    this.setState((prevState) => ({
      notificationList: (prevState.notificationList = notificationList),
      spinner: spinner,
    }));
  };*/

  onCalendarReceived = (calendarList, spinner) => {
    this.setState((prevState) => ({
      calendarList: (prevState.calendarList = calendarList),
      spinner: spinner,
    }));
  };
  /* componentDidMount() {
    getFoods(this.onFoodsReceived);
  }*/
  componentDidMount() {
    this._isMounted = true;
    // getNotifications(this.onNotificationsReceived);
    getCalender(this.onCalendarReceived);
    /* this.setState({
      spinner: false,
    });*/
  }

  componentWillUnmount() {
    this._isMounted = false;

    /* this.setState({
      spinner: false,
    });*/
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading Calendar...'}
          textStyle={styles.spinnerTextStyle}
        />

        <FlatList
          //data={this.state.foodList}
          // data={this.state.notificationList}
          data={this.state.calendarList}
          ItemSeparatorComponent={() => (
            <Divider style={{backgroundColor: 'black'}} />
          )}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <ListItem
                containerStyle={styles.listItem}
                title={item.event}
                //title={item.name}
                // subtitle={item.update}

                subtitle={item.message_title + '\n' + item.date}
                onPress={() => {
                  this.setState((prevState) => ({
                    selectedIndex: (prevState.selectedIndex = index),
                  }));
                  this.props.navigation.navigate('Event', {
                    calendar: item,
                  });
                }}
              />
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  listItem: {
    marginTop: 2,
    marginBottom: 2,
    borderWidth: 2,
    height: 100,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 40,
  },
  subtitleStyle: {
    fontSize: 18,
  },
  emptyTitle: {
    fontSize: 40,
    marginBottom: 16,
  },
  emptySubtitle: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});
