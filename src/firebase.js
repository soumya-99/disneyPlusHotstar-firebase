import firebase from "firebase"
const firebaseConfig = {
	apiKey: "AIzaSyDjVuVc-9qMP45pz2C1ZkMaaLENCVTIL8c",
	authDomain: "disney-clone-d70ac.firebaseapp.com",
	projectId: "disney-clone-d70ac",
	storageBucket: "disney-clone-d70ac.appspot.com",
	messagingSenderId: "500116400579",
	appId: "1:500116400579:web:bef4109e6db7f9a27d7576",
	measurementId: "G-V4L23J6KER",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
