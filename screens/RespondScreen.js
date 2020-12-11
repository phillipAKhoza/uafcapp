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
  ActivityIndicator,
} from 'react-native';
import {withFormik} from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import {addChat} from '../api/ChatApi';

class RespondScreen extends React.Component {
  /* state = {
    user: {
      request: '',
      name: '',
      number: '',
      email: '',
      message: '',
    },
  };*/
  onChatAdded = (user) => {
    console.log('Chat Sent');
    console.log(user);
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text style={styles.pickerText}>Type of Message:</Text>
            <View style={styles.picker}>
              <DropDownPicker
                items={[
                  {label: 'Prayer Request', value: 'Prayer Request'},
                  {label: 'Praise Report', value: 'Praise Report'},
                  {label: 'I,d like to serve', value: 'I,d like to serve'},
                  {label: 'Baptism', value: 'Baptism'},
                  {label: 'Partnership', value: 'Partnership'},
                  {
                    label: 'Contact Pastoral Care',
                    value: 'Contact Pastoral Care',
                  },
                  {label: 'General Query', value: 'General Query'},
                ]}
                style={styles.pick}
                defaultIndex={0}
                placeholder={'select Message type'}
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
                style={styles.messageInput}
                underlineColorAndroid="transparent"
                placeholder="Message..."
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
                title="             Submit               "
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
  messageInput: {
    borderWidth: 1,
    height: 150,
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
})(RespondScreen);
