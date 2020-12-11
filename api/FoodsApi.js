import firestore from '@react-native-firebase/firestore';

export async function getNotifications(notificationsRetrieved) {
  //var foodLis = [];
  var notificationList = [];
  var spinner = false;

  var snapshot = await firestore()
    .collection('Notifications') // Foods
    .orderBy('createdAt')
    .get();

  snapshot.forEach((doc) => {
    notificationList.push(doc.data()); //foodLis.push(doc.data());
  });
  console.log(notificationList); //  console.log(foodLis);
  notificationsRetrieved(notificationList, spinner); // foodsRetreived(foodLis);
}
