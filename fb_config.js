const firebaseConfig = {
    apiKey: "AIzaSyAdltA9orIqNmF6vqQDMe8JSH2AfvifZPg",
    authDomain: "m3g-study.firebaseapp.com",
    projectId: "m3g-study",
    storageBucket: "m3g-study.appspot.com",
    messagingSenderId: "386768097336",
    appId: "1:386768097336:web:9c4093b20c52b11751d6cd"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();