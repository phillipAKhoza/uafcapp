import firestore from '@react-native-firebase/firestore';

export async function getCalender(
  calendarRetrieved /**notificationsRetrieved*/,
) {
  //var foodLis = [];
  // var notificationList = [];
  var calendarList = [];
  var spinner = false;

  var snapshot = await firestore()
    .collection('Calendar') // Foods

    .get();

  snapshot.forEach((doc) => {
    calendarList.push(doc.data()); //foodLis.push(doc.data());
  });
  calendarList; //  console.log(notificationList)// console.log(foodLis);
  calendarRetrieved(calendarList, spinner); // foodsRetreived(foodLis);  notificationsRetrieved(notificationList, spinner);
}
