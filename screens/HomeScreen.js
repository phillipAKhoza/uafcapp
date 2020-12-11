import * as React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SectionList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeedScreen from './FeedScreen';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headercontainer}>
          <View style={styles.position}>
            <Image style={styles.img} source={require('../img/logo1.png')} />
            <Text style={styles.text}>HOME</Text>
            <Text style={styles.subtext}>Pretoria West</Text>
          </View>

          <View style={styles.icons}>
            <Icon
              style={styles.location}
              name="map-marker-alt"
              size={28}
              color="black"
              onPress={() => this.props.navigation.navigate('Location')}
            />

            <Icon
              style={styles.notification}
              name="bell"
              size={29}
              color="black"
              onPress={() => this.props.navigation.navigate('Notifications')}
            />
          </View>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.welcomeimage}
                source={require('../img/jacaranda.jpg')}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Calendar')}>
              <View style={styles.calender}>
                <View style={styles.position}>
                  <View style={styles.iconBack} />
                  <Icon
                    style={styles.calenderIcon}
                    name="calendar-alt"
                    size={28}
                    color="white"
                  />
                  <Text style={styles.calendarText}>ADD TO YOUR CALENDAR</Text>
                </View>
                <Icon
                  style={styles.ArrowIcon}
                  name="long-arrow-alt-right"
                  size={38}
                  color="black"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Stream')}>
              <View style={styles.stream}>
                <View style={styles.position}>
                  <View style={styles.iconBack} />
                  <Icon
                    style={styles.streamIcon}
                    name="play-circle"
                    size={33}
                    color="white"
                  />
                  <Text style={styles.streamText}>STREAM SERVICE</Text>
                </View>
                <Icon
                  style={styles.ArrowIconStream}
                  name="long-arrow-alt-right"
                  size={38}
                  color="black"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Verse of the day')
              }>
              <View style={styles.verse}>
                <Image
                  style={styles.verseimage}
                  source={require('../img/bible.jpg')}
                />
                <View style={styles.verseTitle}>
                  <View style={styles.verseIconBack}></View>
                  <Icon
                    style={styles.verseIcon}
                    name="book"
                    size={30}
                    color="white"
                  />
                  <Text style={styles.verseText}>VERSE OF THE DAY</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('News/Feeds')}>
              <View style={styles.verse}>
                <Image
                  style={styles.verseimage}
                  source={require('../img/ChurchNews.png')}
                />
                <View style={styles.verseTitle}>
                  <View style={styles.verseIconBack}></View>
                  <Icon
                    style={styles.verseIcon}
                    name="newspaper"
                    size={30}
                    color="white"
                  />
                  <Text style={styles.verseText}>UAFC NEWS/FEEDS</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Sunday School')}>
              <View style={styles.verse}>
                <Image
                  style={styles.verseimage}
                  source={require('../img/Children.jpg')}
                />
                <View style={styles.verseTitle}>
                  <View style={styles.verseIconBack}></View>
                  <Icon
                    style={styles.kidsIcon}
                    name="child"
                    size={30}
                    color="white"
                  />
                  <Text style={styles.verseText}>SUNDAY SCHOOL</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.about}>
            <Text style={styles.aboutText}> About UAFC</Text>
            <ScrollView style={styles.aboutScroll} horizontal={true}>
              <View style={styles.aboutRow}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Mission & Vision');
                  }}>
                  <View style={styles.aboutContainer}>
                    <Image
                      style={styles.aboutimage}
                      source={require('../img/vision.jpg')}
                    />
                    <View style={styles.aboutTitle}>
                      <Text style={styles.misionText}>
                        OUR MISSION & VISION
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Doctrine');
                  }}>
                  <View style={styles.aboutContainer}>
                    <Image
                      style={styles.aboutimage}
                      source={require('../img/doct.jpg')}
                    />
                    <View style={styles.aboutTitle}>
                      <Text style={styles.misionText}>DOCTRINE</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Our Leaders');
                  }}>
                  <View style={styles.aboutContainer}>
                    <Image
                      style={styles.aboutimage}
                      source={require('../img/Lead.png')}
                    />
                    <View style={styles.aboutTitle}>
                      <Text style={styles.misionText}>OUR LEADERS</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Our Foundations');
                  }}>
                  <View style={styles.aboutContainer}>
                    <Image
                      style={styles.aboutimage}
                      source={require('../img/Westside.png')}
                    />
                    <View style={styles.aboutTitle}>
                      <Text style={styles.misionText}>Our Foundations</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Our Branches');
                  }}>
                  <View style={styles.aboutContainer}>
                    <Image
                      style={styles.aboutimage}
                      source={require('../img/dark.jpg')}
                    />
                    <View style={styles.aboutTitle}>
                      <Text style={styles.misionText}>
                        UAFC BRANCH LOCATIONS
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        {/* <FlatList
          style={styles.feed}
          data={posts}
          renderItem={({item}) => this.renderPost(item)}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.feedsStyle}></FlatList> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headercontainer: {
    height: 90,
    left: 0,
    top: 0,
    backgroundColor: '#fff',
    width: '100%',
    //flexDirection: 'row',
  },
  position: {
    flexDirection: 'row',
  },
  img: {
    top: 20,
    left: 5,
    height: 70,
    width: 130,
  },
  text: {
    top: 40,
    fontWeight: 'bold',
    fontSize: 18,
    left: -30,
  },
  subtext: {
    fontWeight: 'bold',
    fontSize: 15,
    top: 60,
    left: -80,
  },
  notification: {
    left: 15,
    paddingRight: 15,
  },
  location: {
    left: 0,
  },
  icons: {
    // left: 300,
    top: -35,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  content: {
    //top: 30,
    // flexDirection: 'row',
  },
  imageContainer: {
    flexDirection: 'column',
  },
  welcomeimage: {
    // top: 40,
    height: 250,
    width: '100%',
  },

  calender: {
    backgroundColor: 'white',
    marginTop: 20,
    width: '90%',
    height: 70,
    marginLeft: 20,
    borderRadius: 20,
    alignContent: 'center',

    // flexDirection: 'row',
  },

  iconBack: {
    backgroundColor: 'black',
    height: 50,
    width: 50,
    borderRadius: 30,
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 8,
  },
  calenderIcon: {
    marginLeft: -37,
    alignSelf: 'center',
    marginRight: 5,
  },
  calendarText: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
    top: 23,
  },
  ArrowIcon: {
    alignSelf: 'flex-end',
    top: -44,
    marginRight: 10,
  },
  stream: {
    backgroundColor: 'white',
    marginTop: 20,
    width: '90%',
    height: 70,
    marginLeft: 20,
    borderRadius: 20,
  },
  streamIcon: {
    marginLeft: -42,
    top: 15,
    marginRight: 14,
  },
  streamText: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
    top: 23,
  },
  ArrowIconStream: {
    alignSelf: 'flex-end',
    top: -44,
    marginRight: 10,
  },
  verse: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 230,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  verseimage: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  verseTitle: {
    flexDirection: 'row',
  },
  verseIconBack: {
    height: 50,
    width: 50,
    backgroundColor: 'black',
    top: 5,
    borderRadius: 40,
    marginLeft: 20,
  },
  verseIcon: {
    left: -40,
    top: 15,
  },
  kidsIcon: {
    left: -35,
    top: 15,
  },
  verseText: {
    left: -15,
    fontSize: 18,
    fontWeight: 'bold',
    top: 5,
    alignSelf: 'center',
  },
  feeds: {
    margin: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 20,
  },
  feedsStyle: {
    margin: 30,
  },

  aboutScroll: {
    flexDirection: 'row',
  },
  aboutRow: {
    flexDirection: 'row',
  },
  about: {
    height: 280,
    width: '100%',
    backgroundColor: 'white',
    //  flexDirection: 'row',
    marginTop: 20,
  },
  aboutText: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
    fontSize: 20,
  },
  aboutContainer: {
    marginTop: 10,
    width: 300,
    alignSelf: 'center',
    backgroundColor: 'gray',
    height: 200,
    marginLeft: 20,
    marginRight: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  aboutimage: {
    width: '100%',
    height: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  misionText: {
    fontSize: 17,
    marginLeft: 10,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'white',
  },
});
