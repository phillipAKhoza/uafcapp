import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import Spinner from 'react-native-loading-spinner-overlay';

export default class kidsSection extends React.Component {
  state = {
    spinner: true,
  };
  hideSpinner() {
    this.setState({spinner: false});
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading Sunday School...'}
          textStyle={styles.spinnerTextStyle}
          size="large"
        />
        <WebView
          onLoad={() => this.hideSpinner()}
          source={{
            uri: 'http://uafcwestside.epizy.com/kidsSection.html?iiiiii',
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          directionalLockEnabled={false}
          style={{marginTop: 0}}
        />
      </View>
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
});
