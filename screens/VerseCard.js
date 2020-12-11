import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body} from 'native-base';

// Since this component is just showing some data to the user. It's solely a presentational component. Therefore, it can stand to be just a functional component, since we don't need lifecycle methods, or access to state.
const VerseCard = ({verse}) => {
  const {version, reference, text} = verse;

  return (
    <Container style={styles.Container}>
      <Content style={styles.Content}>
        <Card>
          <CardItem header>
            <Text style={styles.header}>
              {reference} {version}
            </Text>
          </CardItem>

          <CardItem style={styles.body}>
            <Body>
              <Text style={styles.text}>{text}</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text style={styles.text}>Stay Blessed!!!</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default VerseCard;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'gray',
  },
  Content: {
    top: 100,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  body: {
    height: 200,
  },
  text: {
    fontSize: 20,
  },
});
