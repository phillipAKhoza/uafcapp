import React, {useState, useEffect} from 'react';
import {Button, Image, Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';

//bottom-tabs
import HomeScreen from './screens/HomeScreen';
import RespondScreen from './screens/RespondScreen';
import DonateScreen from './screens/DonateScreen';
import StreamScreen from './screens/StreamScreen';
import MoreScreen from './screens/MoreScreen';
//under more screen
import TechnicalScreen from './screens/TechnicalScreen';
import Profile from './screens/Profile';
//under profile & Authentication
import RegistrationScreen from './screens/RegistrationScreen';
import Login from './screens/Login';
import splash from './screens/Splash';

//Header-Icons
import LocationScreen from './screens/LocationScreen';
import NotificationScreen from './screens/NotificationScreen';
//Container of notification list
import update from './screens/update';

//homeScreen Content
import calendar from './screens/calendar';
//container of calender
import event from './screens/event';
import VerseList from './screens/VerseList';
import Feeds from './screens/FeedScreen';
import kidsSection from './screens/kidsSection';

//about section
import MissionScreen from './screens/homeScreen/MissionScreen';
import DoctrineScreen from './screens/homeScreen/DoctrineScreen';
import LeadersScreen from './screens/homeScreen/LeadersScreen';
import BranchesScreen from './screens/homeScreen/BranchesScreen';
import FoundationScreen from './screens/homeScreen/FoundationScreen';
//authentication
import {signout} from './api/AuthApi';
import Spinner from 'react-native-loading-spinner-overlay';

function DetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details!</Text>
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        style={styles.tab}
        options={({navigation, route}) => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen
        name="Calendar"
        component={calendar} /*the calendar */
      />

      <HomeStack.Screen name="Event" component={event} /*the calendar */ />

      <HomeStack.Screen
        name="Location"
        component={LocationScreen} /*the local churches */
      />
      <HomeStack.Screen
        name="Notifications"
        component={NotificationScreen} /*All updates */
      />
      <HomeStack.Screen
        name="Notification"
        component={update} /*Actual single update */
      />
      <HomeStack.Screen
        name="Verse of the day"
        component={VerseList} /*verse of the day */
      />

      <HomeStack.Screen
        name="News/Feeds"
        component={Feeds} /*verse of the day */
      />
      <HomeStack.Screen
        name="Sunday School"
        component={kidsSection} /*verse of the day */
      />

      <HomeStack.Screen
        name="Mission & Vision"
        component={MissionScreen} /*Mission & Visiion */
      />
      <HomeStack.Screen
        name="Doctrine"
        component={DoctrineScreen} /*history ofthe church */
      />
      <HomeStack.Screen
        name="Our Leaders"
        component={LeadersScreen} /*our leaders  */
      />
      <HomeStack.Screen
        name="Our Branches"
        component={BranchesScreen} /*locations of branches*/
      />
      <HomeStack.Screen
        name="Our Foundations"
        component={FoundationScreen} /*foundation screen */
      />
    </HomeStack.Navigator>
  );
}

const RespondStack = createStackNavigator();

function RespondStackScreen() {
  return (
    <RespondStack.Navigator>
      <RespondStack.Screen name="Chat" component={RespondScreen} />
    </RespondStack.Navigator>
  );
}

const DonateStack = createStackNavigator();

function DonateStackScreen() {
  return (
    <DonateStack.Navigator>
      <DonateStack.Screen name="Donate" component={DonateScreen} />
      <DonateStack.Screen name="Details" component={DetailsScreen} />
    </DonateStack.Navigator>
  );
}

const StreamStack = createStackNavigator();

function StreamStackScreen() {
  return (
    <StreamStack.Navigator>
      <StreamStack.Screen name="Stream" component={StreamScreen} />
      <StreamStack.Screen name="Details" component={DetailsScreen} />
    </StreamStack.Navigator>
  );
}

const MoreStack = createStackNavigator();

function MoreStackScreen() {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen
        name="More"
        component={MoreScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => {
                signout();
              }}
              title="Sign-Out"
              color="blue"
            />
          ),
        }}
      />
      <MoreStack.Screen name="Technical" component={TechnicalScreen} />
      <MoreStack.Screen name="Profile" component={Profile} />
      <MoreStack.Screen name="Registration" component={RegistrationScreen} />
    </MoreStack.Navigator>
  );
}

const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="splash">
        <AuthStack.Screen
          name="splash"
          component={splash}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'comments' : 'comments';
            } else if (route.name === 'Donate') {
              iconName = focused ? 'wallet' : 'wallet';
            } else if (route.name === 'Stream') {
              iconName = focused ? 'youtube' : 'youtube';
            } else if (route.name === 'More') {
              iconName = focused ? 'bars' : 'bars';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        style={styles.container}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            shadowOffset: {width: 5, height: 3},
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5,
          },
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Chat" component={RespondStackScreen} />
        <Tab.Screen name="Donate" component={DonateStackScreen} />
        <Tab.Screen name="Stream" component={StreamStackScreen} />
        <Tab.Screen name="More" component={MoreStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);

    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <AuthStackScreen />;
  }

  return <AppStack />;
}

const styles = StyleSheet.create({
  container: {
    height: 15,
  },
  img: {
    width: 115,
    height: 55,
  },
  tab: {
    flexDirection: 'row',
  },
});
