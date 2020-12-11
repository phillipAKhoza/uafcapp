import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {withFormik} from 'formik';
import auth from '@react-native-firebase/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import {login} from '../api/AuthApi';

class Login extends Component {
  state = {
    isVisible: false, //state of modal default false
    spinner: false,
    url: '',
  };
  login({email, password}) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => console.log(value))
      .catch((error) => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('user not found.');
        }
        console.error(error);
      });
    console.log('logging in');
    this.setState({
      spinner: true,
    });
    console.log('after spinner');
    setTimeout(() => {
      this.setState({
        spinner: false,
      });
    }, 9000);
  }

  anonymousSignIn = () => {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch((error) => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }
        console.error(error);
      });
    console.log('acessing');

    this.setState({
      spinner: true,
    });
    console.log('after spinner');
    setTimeout(() => {
      this.setState({
        spinner: false,
      });
    }, 9000);
  };
  signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    this.setState({
      spinner: true,
    });
  };

  spin = () => {
    this.setState({
      spinner: true,
    });
  };

  /**   componentDidMount = () => {
     this.setState({
       spinner: true
     })
   }*/

  render() {
    return (
      <ScrollView>
        <View>
          <Image style={styles.img} source={require('../img/logo1.png')} />
          <Text style={styles.pickerText}>Welcome to UAFC WESTSIDE APP</Text>

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
              value={this.props.values.password}
              onChangeText={(text) => {
                this.props.setFieldValue('password', text);
              }}
            />
            <Text style={styles.errorText}>{this.props.errors.password}</Text>
          </View>

          <View style={styles.buttons}>
            <View style={styles.button}>
              <Button
                title="Sign-In"
                onPress={(user) => {
                  this.props.handleSubmit();
                  // window.location.reload(false);
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Sign-up"
                onPress={(user) => {
                  {
                    this.props.navigation.navigate('RegistrationScreen');
                  }
                  // window.location.reload(false);
                }}
              />
            </View>
            <View style={styles.button}>
              <Button title="Sign-In Later" onPress={this.anonymousSignIn} />
            </View>
          </View>
          <Spinner
            visible={this.state.spinner}
            textContent={'Authenticating...'}
            textStyle={styles.spinnerTextStyle}
            size={'large'}
            animation={'fade'}
          />
        </View>
      </ScrollView>
    );
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
  spinnerTextStyle: {
    color: 'red',
    fontSize: 30,
  },
  difText: {
    fontSize: 15,
    marginBottom: 10,
  },
  close: {
    alignSelf: 'baseline',
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
    top: 10,
    width: '100%',
    height: 200,
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
    justifyContent: 'space-between',
    alignItems: 'center',

    flexDirection: 'row',
    width: 300,
    marginLeft: 40,
  },
  button: {
    marginLeft: 20,
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
    password: '',
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

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length > 1000) {
      errors.password = '  Must be 15 characters or less';
    }

    return errors;
  },
  handleSubmit: (values, {props}) => {
    console.log(values);
    login(values);
  },
})(Login);
