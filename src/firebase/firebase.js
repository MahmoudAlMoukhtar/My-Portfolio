import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrRx2FPIymm8ULbKfR1r9O75bV1Qc8Z3o",
  authDomain: "my-portfolio-website-2b085.firebaseapp.com",
  databaseURL:
    "https://my-portfolio-website-2b085-default-rtdb.firebaseio.com/",
  projectId: "my-portfolio-website-2b085",
  storageBucket: "my-portfolio-website-2b085.appspot.com",
  messagingSenderId: "46285179731",
  appId: "1:46285179731:web:9eda60e7cd95fd5b84efa6",
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {firebase, googleAuthProvider, database as default};

/* database.ref("projects").push({
  image: "/Notes.png",
  title: "Notes-javaScript-app",
  category: "Javascript",
  description: "Notes app created with Html, Css and javaScript",
  githubLink: "klasjfdlkhloremasdafdassghyths",
  demoLink: "http://notes-app-mahmoud.netlify.app/",
});
 */
