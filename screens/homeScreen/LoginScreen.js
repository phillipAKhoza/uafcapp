import * as React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import {withFormik} from 'formik';
import {addChat} from '../../api/ChatApi';

class LoginScreen extends React.Component {
  onChatAdded = (user) => {
    console.log('Chat Sent');
    console.log(user);
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
              <Image style={styles.img} source={require('../../img/logo1.png')} />
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
              <Button
                title="Sign In"
                onPress={(user) => {
                  this.props.handleSubmit();
                  // window.location.reload(false);
                }}
              />
              <Button
                title="Register"
                onPress={(user) => {
                  this.props.handleSubmit();
                  // window.location.reload(false);
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
  img: {
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
    width: 250,
    marginLeft:50
    
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
})(LoginScreen);
