import * as React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import {withFormik} from 'formik';
import Spinner from 'react-native-loading-spinner-overlay';
import auth from '@react-native-firebase/auth';
import {signup} from '../api/AuthApi';

class RegistrationScreen extends React.Component {
  state = {
    spinner: false,
  };
  signup({email, password, displayName}) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userInfo) => {
        console.log(userInfo);
      })
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

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={styles.inputs}>
              <TextInput
                style={styles.nameInput}
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
                secureTextEntry={true}
                value={this.props.values.password}
                onChangeText={(text) => {
                  this.props.setFieldValue('password', text);
                }}
              />
              <Text style={styles.errorText}>{this.props.errors.password}</Text>
            </View>

            <View style={styles.button}>
              <Button
                title="Register"
                onPress={(user) => {
                  this.props.handleSubmit();
                  console.log('we are here1');
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
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
  spinnerTextStyle: {
    color: '#FFF',
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
    name: '',
    email: '',
    password: '',
  }),
  validate: (values, {props}) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 30) {
      errors.name = 'Must be 30 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length > 20) {
      errors.password = '  Must be 20 characters or less';
    }

    return errors;
  },
  handleSubmit: (values, {props}) => {
    console.log(values);
    signup(values);
  },
})(RegistrationScreen);
