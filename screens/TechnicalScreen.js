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
import DropDownPicker from 'react-native-dropdown-picker';
import {addChat} from '../api/ChatApi';

class TechnicalScreen extends React.Component {
  onChatAdded = (user) => {
    console.log('Chat Sent');
    console.log(user);
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text style={styles.pickerText}>
              if you're experiencing any technical challenges with our app,
              please submit your feedback here. If this is related account,
              please include your name and email address so that we can identify
              you
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
              <Text style={styles.messageText}>Your Feedback</Text>
              <TextInput
                style={styles.messageInput}
                underlineColorAndroid="transparent"
                placeholder="Please be as detailed as posible..."
                placeholderTextColor="black"
                autoCapitalize="none"
                editable={true}
                textAlignVertical={'top'}
                multiline={true}
                value={this.props.values.message}
                onChangeText={(text) => {
                  this.props.setFieldValue('message', text);
                }}
              />
              <Text style={styles.errorText}>{this.props.errors.message}</Text>
            </View>

            <View style={styles.button}>
              <Button
                title="             Submit Message               "
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

  emailInput: {
    margin: 15,
    borderWidth: 1,
    borderColor: 'grey',
  },
  messageInput: {
    borderWidth: 1,
    height: 150,
    margin: 15,
    borderColor: 'grey',
    justifyContent: 'flex-start',
  },
  messageText: {
    fontSize: 15,
    marginLeft: 17,
    fontWeight: 'bold',
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
      errors.message = '  Must be 1000 characters or less';
    }

    return errors;
  },
  handleSubmit: (values, {props}) => {
    console.log(values);

    addChat(values);
    Alert.alert(
      'Mesage sent',
      'thank you for being in contact with us we will make sure to get back to you and solve your technical issue\n STAY BLESSED!!!!',
      [
        {
          text: 'Done',
          onPress: () => {},
        },
      ],
    );
  },
})(TechnicalScreen);
