import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseConfig } from '../environment';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration



const app = initializeApp(firebaseConfig);

// Get a list of cities from your database
export async function getUsers() {
  console.log(firebaseConfig)
  const db = getFirestore(app);

  const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  return usersSnapshot.docs.map(doc => doc.data()); // return users list
}