import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
  apiKey: 'AIzaSyAHhAog4V4hyperARL392lN0HZ8pXngOKY',
  authDomain: 'lanchland.firebaseapp.com',
  databaseURL: 'https://lanchland.firebaseio.com',
  storageBucket: 'lanchland.appspot.com'
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseConfigModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
