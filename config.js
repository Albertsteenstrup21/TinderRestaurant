//config fil til firebase

import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
apiKey: "AIzaSyC76xlw_lpWmT1vuWXAYopD3nBtmp_Tf3A",
authDomain: "restauranttinder-e8829.firebaseapp.com",
projectId: "restauranttinder-e8829",
storageBucket: "restauranttinder-e8829.appspot.com",
messagingSenderId: "226570833851",
appId: "1:226570833851:web:81fa0bc9da274a864d7e9e",
databaseURL: 'https://restauranttinder-e8829-default-rtdb.europe-west1.firebasedatabase.app/'
};

if(firebase.apps.length === 0){
firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();
export { db };