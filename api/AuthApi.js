
import auth from '@react-native-firebase/auth';

//import { v4 as uuidv4 } from 'uuid';

export function login({ email, password }) {
   
    auth()
    .signInWithEmailAndPassword(email, password)
    .then((value) => console.log(value))
}

export function signup({ email, password, displayName }) {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userInfo) => {
      console.log(userInfo)
      userInfo.user.updateProfile({ displayName: displayName.trim() })
        .then(() => { })
    })
}
export function signInAnonymusly() {
     auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });

}

export function subscribeToAuthChanges(authStateChanged) {
   
    auth()
    .onAuthStateChanged((user) => {
    authStateChanged(user);
  })
}

export function signout() {
    auth()
    .signOut()
    .then(() => {
     console.log("signed out")
    })
}

/**export function updateFood(food, updateComplete) {
  food.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
  console.log("Updating food in firebase");

  firebase.firestore()
    .collection('Foods')
    .doc(food.id).set(food)
    .then(() => updateComplete(food))
    .catch((error) => console.log(error));
}

export function deleteFood(food, deleteComplete) {
  console.log(food);

  firebase.firestore()
    .collection('Foods')
    .doc(food.id).delete()
    .then(() => deleteComplete())
    .catch((error) => console.log(error));
}

export async function getFoods(foodsRetreived) {

  var foodList = [];

  var snapshot = await firebase.firestore()
    .collection('Foods')
    .orderBy('createdAt')
    .get()

  snapshot.forEach((doc) => {
    const foodItem = doc.data();
    foodItem.id = doc.id;
    foodList.push(foodItem);
  });

  foodsRetreived(foodList);
}
*/
/**export function uploadFood(food, onFoodUploaded, { updating }) {

  if (food.imageUri) {
    const fileExtension = food.imageUri.split('.').pop();
    console.log("EXT: " + fileExtension);

    var uuid = uuidv4();

    const fileName = `${uuid}.${fileExtension}`;
    console.log(fileName);

    var storageRef = firebase.storage().ref(`foods/images/${fileName}`);

    storageRef.putFile(food.imageUri)
      .on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          console.log("snapshot: " + snapshot.state);
          console.log("progress: " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100);

          if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
            console.log("Success");
          }
        },
        error => {
          unsubscribe();
          console.log("image upload error: " + error.toString());
        },
        () => {
          storageRef.getDownloadURL()
            .then((downloadUrl) => {
              console.log("File available at: " + downloadUrl);

              food.image = downloadUrl;

              delete food.imageUri;

              if (updating) {
                console.log("Updating....");
                updateFood(food, onFoodUploaded);
              } else {
                console.log("adding...");
                addFood(food, onFoodUploaded);
              }
            })
        }
      )
  } else {
    console.log("Skipping image upload");

    delete food.imageUri;

    if (updating) {
      console.log("Updating....");
      updateFood(food, onFoodUploaded);
    } else {
      console.log("adding...");
      addFood(food, onFoodUploaded);
    }
  }
}

export function addFood(food, addComplete) {
  food.createdAt = firebase.firestore.FieldValue.serverTimestamp();

  firebase.firestore()
    .collection('Foods')
    .add(food)
    .then((snapshot) => {
      food.id = snapshot.id;
      snapshot.set(food);
    }).then(() => addComplete(food))
    .catch((error) => console.log(error));
}*/
