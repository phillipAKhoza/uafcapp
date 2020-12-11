import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

import {WebView} from 'react-native-webview';

export default class StreamScreen extends React.Component {
  render() {
    return (
      <WebView
        source={{
          uri:
            'https://www.youtube.com/channel/UCtFrag6hqClfynTAxj99dAw/videos',
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        directionalLockEnabled={false}
        //style={{marginTop: 0}}
      />
    );
  }
}
