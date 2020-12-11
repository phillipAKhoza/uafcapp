import firestore from '@react-native-firebase/firestore';

export function addChat(user) {
  user.createdAt = firestore.FieldValue.serverTimestamp();

  firestore()
    .collection('Chat')
    .add(user)
    .then((snapshot) => {
      user.id = snapshot.id;
      snapshot.set(user);
    })
    .then(() => console.log(user))
    .catch((error) => console.log(error));

  console.log(user);
}
