import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome5';
import update from '../screens/update';

export async function getNotification(notificationReceived) {
  var updateList = [];

  const updates = await firestore().collection('updates').get();
  updates.forEach((doc) => {
    const update = doc.data();
    updateList.push(update);
    // foodList: [...prevState.foodList, food] foodList.push(foodItem);
  });

  console.log(updateList);
  notificationReceived(updateList);
}
