import React, {Component} from 'react';
import {ScrollView, ImageBackground, StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import VerseCard from './VerseCard';

class VerseList extends Component {
  state = {
    verseOfTheDay: {},
    Spinner: true,
  };
  // componentDidMount method automatically gets executed as soon as this component is about to get rendered to the screen.
  componentDidMount() {
    fetch('https://www.ourmanna.com/verses/api/get/?format=json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({verseOfTheDay: responseJson.verse.details});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView>
        <VerseCard
          key={this.state.verseOfTheDay.reference}
          verse={this.state.verseOfTheDay}
        />
      </ScrollView>
    );
  }
}

export default VerseList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
