import * as React from 'react';
import {
  Button,
  Alert,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Spinner from 'react-native-loading-spinner-overlay';
import {WebView} from 'react-native-webview';

export default class DonateScreen extends React.Component {
  state = {
    isVisible: false, //state of modal default false
    spinner: true,
    url: '',
  };
  hideSpinner() {
    this.setState({spinner: false});
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.banking}>Banking Details</Text>
          <View style={styles.accounts}>
            <Text style={styles.text}>BANK: FNB</Text>
            <Text style={styles.text}>NAME: Main Account</Text>
            <Text style={styles.text}>Account Type:Cheque</Text>
            <Text style={styles.text}>Account Number: 62574351583</Text>
            <Text style={styles.text}>Brand Code: 250655</Text>
          </View>
          <View style={styles.banking}>
            <Text style={styles.text}>BANK: FNB</Text>
            <Text style={styles.text}>NAME: Building Account Z</Text>
            <Text style={styles.text}>Account Type: Money on Call</Text>
            <Text style={styles.text}>Account Number: 62732340724</Text>
            <Text style={styles.text}>Brand Code: 25065</Text>
          </View>
          <View style={styles.banking}>
            <Text style={styles.text}>BANK: FNB</Text>
            <Text style={styles.text}>NAME: Women’s Fellowship</Text>
            <Text style={styles.text}>Account Type: Cheque</Text>
            <Text style={styles.text}>Account Number: 62732340576</Text>
            <Text style={styles.text}>Brand Code: 250655</Text>
          </View>
          <View style={styles.banking}>
            <Text style={styles.text}>BANK: FNB</Text>
            <Text style={styles.text}>NAME: Men’s Fellowship</Text>
            <Text style={styles.text}>Account Type: Cheque</Text>
            <Text style={styles.text}>Account Number: 62732350103</Text>
            <Text style={styles.text}>Brand Code: 250655</Text>
          </View>
          <View style={styles.banking}>
            <Text style={styles.text}>BANK: FNB</Text>
            <Text style={styles.text}>NAME: Youth Account</Text>
            <Text style={styles.text}>Account Type: Cheque</Text>
            <Text style={styles.text}>Account Number: 62732346582</Text>
            <Text style={styles.text}>Brand Code: 250655</Text>
          </View>
          <View style={styles.banks}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  isVisible: true,
                  url: 'https://www.fnb.co.za/ways-to-bank/online-banking.html',
                });
              }}>
              <Image style={styles.image} source={require('../img/FNB.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  isVisible: true,
                  url: 'https://direct.capitecbank.co.za/ibank/',
                });
              }}>
              <Image
                style={styles.image}
                source={require('../img/Capitec-Bank.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  isVisible: true,
                  url: 'https://ib.absa.co.za/absa-online/login.jsp',
                });
              }}>
              <Image style={styles.image} source={require('../img/absa.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  isVisible: true,
                  url:
                    'https://internetbanking.nedsecure.co.za/Default_Boe.aspx',
                });
              }}>
              <Image
                style={styles.image}
                source={require('../img/NEDBANK.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  isVisible: true,
                  url:
                    ' https://onlinebanking.standardbank.co.za/#/login?intcmp=coza-personal-selfservicebanking-onlinebanking-signin',
                });
              }}>
              <Image
                style={styles.image}
                source={require('../img/standardbank.jpg')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.contain}>
            <Modal
              animationType={'fade'}
              transparent={false}
              visible={this.state.isVisible}
              onRequestClose={() => {
                console.log('Modal has been closed.');
              }}>
              {/*All views of Modal*/}
              <View style={styles.modal}>
                <Spinner
                  visible={this.state.spinner}
                  textContent={'Loading Bank...'}
                  textStyle={styles.spinnerTextStyle}
                  size="large"
                />
                <WebView
                  onLoad={() => this.hideSpinner()}
                  style={{flex: 1}}
                  source={{
                    uri: this.state.url,
                  }}
                />
                <Button
                  style={styles.close}
                  title="Done"
                  onPress={() => {
                    this.setState({
                      isVisible: !this.state.isVisible,
                    });
                  }}
                />
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  banking: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  accounts: {
    margin: 10,
    marginBottom: 15,
  },
  text: {
    fontSize: 15,

    fontWeight: 'bold',
  },
  image: {
    height: 100,
    width: '90%',
    left: 20,
    marginTop: 15,
  },
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  close: {
    alignSelf: 'baseline',
  },
  modal: {
    flex: 1,
  },
});
