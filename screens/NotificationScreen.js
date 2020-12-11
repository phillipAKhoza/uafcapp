import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {ListItem, Divider} from 'react-native-elements';
import {getNotifications} from '../api/FoodsApi';
import Spinner from 'react-native-loading-spinner-overlay';

export default class NotificationScreen extends React.Component {
  state = {
    // foodList: [],
    notificationList: [],
    curentFoodItem: null,
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
  };*/
  onNotificationsReceived = (notificationList, spinner) => {
    this.setState((prevState) => ({
      notificationList: (prevState.notificationList = notificationList),
      spinner: spinner,
    }));
  };

  /* componentDidMount() {
    getFoods(this.onFoodsReceived);
  }*/
  componentDidMount() {
    this._isMounted = true;
    getNotifications(this.onNotificationsReceived);
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
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />

        <FlatList
          //data={this.state.foodList}
          data={this.state.notificationList}
          ItemSeparatorComponent={() => (
            <Divider style={{backgroundColor: 'black'}} />
          )}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <ListItem
                containerStyle={styles.listItem}
                title={item.name}
                //title={item.name}
                // subtitle={item.update}
                subtitle={item.color}
                onPress={() => {
                  this.setState((prevState) => ({
                    selectedIndex: (prevState.selectedIndex = index),
                  }));
                  this.props.navigation.navigate('Notification', {
                    notification: item,
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
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 30,
  },
  subtitleStyle: {
    fontSize: 18,
  },
  emptyTitle: {
    fontSize: 32,
    marginBottom: 16,
  },
  emptySubtitle: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});
