import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: Constants.manifest.firebase.apiKey,
  authDomain: Constants.manifest.firebase.authDomain,
  projectId: Constants.manifest.firebase.projectId,
  storageBucket: Constants.manifest.firebase.storageBucket,
  messagingSenderId: Constants.manifest.firebase.messagingSenderId,
  appId: Constants.manifest.firebase.appId,
};

export default firebaseConfig;
