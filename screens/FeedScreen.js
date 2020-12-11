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
          textContent={'Loading Feed...'}
          textStyle={styles.spinnerTextStyle}
          size="large"
        />
        <WebView
          onLoad={() => this.hideSpinner()}
          style={{flex: 1}}
          source={{
            uri: 'http://uafcwestside.epizy.com/news.html?i&iii&iiiiI&i&',
          }}
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
