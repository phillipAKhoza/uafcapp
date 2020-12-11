import React,{ useState, useEffect } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {withFormik} from 'formik';

import { addChat } from '../../api/ChatApi';


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


class RegistrationScreen extends React.Component {

constructor(props){
  super(props);
}
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
  signOut = () => {
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  }
 
  render() {
   const isLoggedIn = <LoginApp />
    if (isLoggedIn) {
     
       return (
        <SafeAreaView>
          <ScrollView>
            <View>
          
              <View style={styles.buttons}>
                <View style={styles.button}>
                  <Button
                    title="Sign In"
                    onPress={(user) => {
                     
                    }}
                  />
                </View>
                <View style={styles.button}>
                   <Button
                     title="Register"
                     onPress={(user) => {
                  
                       this.props.navigation.navigate('Registration');
                        
                     }}
                     
                     
                  />
                </View>

                <View style={styles.button}>
                  <Button
                    title="SIGN IN LATER"
                    style={styles.button}
                    onPress={this.anonymousSignIn}
                  />
                </View>
                
              </View>
            
              <View style={styles.inputs}>
                <TextInput
                /**   style={styles.nameInput}
                   underlineColorAndroid="transparent"
                   placeholder="Full name..."
                   placeholderTextColor="black"
                   autoCapitalize="none"
                   value={this.props.values.name}
                   onChangeText={(text) => {
                     this.props.setFieldValue('name', text);
                   }}
                 />
                 <Text style={styles.errorText}>{this.props.errors.name}</Text>
                 <View style={styles.picker}>
                 <DropDownPicker
                   items={[
                     {label: 'Male', value: 'Male'},
                     {label: 'Female', value: 'Female'},
                   
                   ]}
                   style={styles.pick}
                   defaultIndex={0}
                   placeholder={'Gender'}
                   labelStyle={{
                     fontSize: 17,
                     color: '#000',
                   }}
                   containerStyle={{height: 50}}
                   onChangeItem={(item) => {
                     this.props.setFieldValue('request', item.value);
                   }}
                 />
                 <Text style={styles.errorText}>{this.props.errors.request}</Text>
               </View>  
                 <TextInput
                   style={styles.numberInput}
                   underlineColorAndroid="transparent"
                   placeholder="Phone Number...."
                   placeholderTextColor="black"
                   autoCapitalize="none"
                   keyboardType="numeric"
                   value={this.props.values.number}
                   onChangeText={(text) => {
                     this.props.setFieldValue('number', text);
                   }}
                 />
                 <Text style={styles.errorText}>{this.props.errors.number}</Text>
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
                 <TextInput
                   style={styles.passwordInput}
                   underlineColorAndroid="transparent"
                   placeholder="Password..."
                   placeholderTextColor="black"
                   autoCapitalize="none"
                   editable={true}
                   se
                   value={this.props.values.message}
                   onChangeText={(text) => {
                     this.props.setFieldValue('message', text);
                   }}
                 />
                 <Text style={styles.errorText}>{this.props.errors.message}</Text>
               </View>
   
               <View style={styles.button}>
                 <Button
                   title="             Register               "
                   onPress={(user) => {
                     this.props.handleSubmit();
                     // window.location.reload(false);
                   }}
                 />*/
                ></TextInput>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
    else
    {
      return (
        <View style={styles.buttons}>
           
          <View style={styles.button}>
            <Button
              title="SIGN OUT"
              style={styles.button}
              onPress={this.signOut}
              isLoggedIn={false}
              
            />
          </View>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  contianer: {
    justifyContent: 'center',
    justifyContent: 'center',
  
  },
  buttons: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
   
    flexDirection: 'row',
    flexWrap:'wrap',
    width: 250,
    marginLeft: 65,
    top:20
    

  },
  button: {
    margin:10
  },
  pickerText: {
    padding: 15,
    fontSize: 17,
    fontWeight: 'bold',
  },
  picker: {
    width: '95%',
    paddingLeft: 15,
  },
  pick: {
    backgroundColor: 'transparent',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },

  nameInput: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    margin: 15,
  },
  numberInput: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    margin: 15,
  },
  emailInput: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    margin: 15,
  },
  passwordInput: {
    borderWidth: 1,
    margin: 15,
    borderColor: 'grey',
    justifyContent: 'flex-start',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
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
    request: '',
    name: '',
    number: '',
    email: '',
    message: '',
  }),
  validate: (values, {props}) => {
    const errors = {};
    if (!values.request) {
      errors.request = 'Required';
    }

    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 30) {
      errors.name = 'Must be 30 characters or less';
    }

    if (!values.number) {
      errors.number = 'Required';
    } else if (values.number.length > 10) {
      errors.number = ' contact number Must be 10 numbers';
    } else if (values.number.length < 10) {
      errors.number = ' contact number Must be 10 numbers';
    }

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
      errors.message = '  Must be 1000 characters or less';
    }

    return errors;
  },
  handleSubmit: (values, {props}) => {
    console.log(values);

    addChat(values);
    Alert.alert(
      'Mesage sent',
      'thank you for being in contact with us we will get make to get back to you\n STAY BLESSED!!!!',
      [
        {
          text: 'Done',
          onPress: () => {},
        },
      ],
    );
  },
})(RegistrationScreen);
