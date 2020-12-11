import React, {Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Modal,ScrollView,Image,TextInput} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import {withFormik} from 'formik';
import auth from '@react-native-firebase/auth';

function LoginApp () {
 
  var route = null;
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
    return (
      route = false
    );
  }

  return (
    route = true
      
  );
}

class App extends Component {
   
  anonymousSignIn = () => {
   
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
        
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  };
  state = {
    isVisible: false, //state of modal default false
    spinner: true,
    url: '',
  };
   signOut = () => {
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  }


  render() {
   
    
    do {
       const isLoggedIn = <LoginApp />
      if (isLoggedIn) {
        return (
          <View style={styles.container}>
            <View>
              <Text style={styles.difText}>Opps!! We are having difficulties in accessing your user profile. If you have an active account please CONTACT US, else please create one bellow</Text>
            </View>
            <Modal
              animationType={'fade'}
              transparent={false}
              visible={this.state.isVisible}
              onRequestClose={() => {
                console.log('Modal has been closed.');
                this.setState({
                  isVisible: false,
             
                });
              }}>
              {/*All views of Modal*/}
              <ScrollView>
                <View>
                  <Image style={styles.img} source={require('../img/logo1.png')} />
                  <Text style={styles.pickerText}>
                    Welcome to UAFC WESTSIDE APP
            </Text>

                  <View style={styles.inputs}>
                    <Text style={styles.messageText}>E-mail</Text>
                    <TextInput
                      style={styles.emailInput}
                      underlineColorAndroid="transparent"
                      placeholder="E-mail..."
                      placeholderTextColor="black"
                      autoCapitalize="none"
                      value={this.props.values.email}
                      onChangeText={(text) => {
                        this.props.setFieldValue('email', text);
                      }}
                    />
                    <Text style={styles.errorText}>{this.props.errors.email}</Text>
                    <Text style={styles.messageText}>Password</Text>
                    <TextInput
                      style={styles.passwordInput}
                      underlineColorAndroid="transparent"
                      placeholder="Password..."
                      placeholderTextColor="black"
                      autoCapitalize="none"
                      editable={true}
                      secureTextEntry={true}
                      value={this.props.values.message}
                      onChangeText={(text) => {
                        this.props.setFieldValue('message', text);
                      }}
                    />
                    <Text style={styles.errorText}>{this.props.errors.message}</Text>
                  </View>

                  <View style={styles.buttons}>

                    <View style={styles.button}>
                      <Button
                        title="Sign In"
                        onPress={(user) => {
                          this.props.handleSubmit();
                          // window.location.reload(false);
                        }}
                      />
                    </View>

                    <View style={styles.button}>
                      <Button
                        title="Register"
                        onPress={(user) => {
                  
                          this.props.navigation.navigate('Registration');
                          this.setState({
                            isVisible: false,
             
                          });
                        }}
                      />
                    </View>

                    <View style={styles.button}>
                      <Button
                        title="SIGN IN LATER"
                        style={styles.button}
                        onPress={() => {
                          this.anonymousSignIn();
                          this.setState({ isVisible: false, });
                          this.props.navigation.navigate('Home');
                        } /* */}
                      />
                    </View>
              
                  </View>
                </View>
              </ScrollView>
            </Modal>
            {/*Button will change state to true and view will re-render*/}
            <Button
              title="Click Here to Log in/ Register"
              onPress={() => {
                this.setState({
                  isVisible: true,
             
                });
          
              }}
            />
          </View>
        );
      }
      if(!isLoggedIn){
        // this.setState({isVisible: false, });
        return (
          <View>
            <Text>Your are Logged in</Text>
            <View style={styles.button}>
              <Button
                title="SIGNOUT"
                style={styles.button}
                onPress={() => { this.signOut(); }}
              />
            </View>
          </View>
        );
      }
    } while(isLoggedIn !== null);
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 10,
    padding: 15,
    
  },
  difText: {
    fontSize: 15,
   marginBottom:10 
  },
  close: {
    alignSelf: 'baseline',
  },
  modal: {
    flex: 1,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
    pickerText: {
    padding: 15,
    fontSize: 17,
    fontWeight: 'bold',
  },
  img: {
     top:10,
    width: '100%' 
    
  },
  emailInput: {
    margin: 15,
    borderWidth: 1,
    borderColor: 'grey',
  },
  passwordInput: {
    borderWidth: 1,
    margin: 15,
    borderColor: 'grey',
    justifyContent: 'flex-start',
  },
  messageText: {
    fontSize: 15,
    marginLeft: 17,
    fontWeight: 'bold',
  },
  buttons: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
   
    flexDirection: 'row',
    flexWrap:'wrap',
    width: 250,
    marginLeft: 65,
    

  },
  button: {
    margin:10
  },
  counter: {
    padding: 10,
    paddingLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 15,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
});

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    message: '',
  }),
  validate: (values, {props}) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.message) {
      errors.message = 'Required';
    } else if (values.message.length > 1000) {
      errors.message = '  Must be 15 characters or less';
    }

    return errors;
  },
  handleSubmit: (values, {props}) => {
    console.log(values);

   
    Alert.alert(
      'Logged in',
      'Welome Home +this.email',
      [
        {
          text: 'Done',
          onPress: () => {},
        },
      ],
    );
  },
})(App);
