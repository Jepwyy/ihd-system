// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCX-CoHCHMaDFP-u6BNh5kkvyZ5_QlKCSU',
  authDomain: 'ims101.firebaseapp.com',
  projectId: 'ims101',
  storageBucket: 'ims101.appspot.com',
  messagingSenderId: '17961048201',
  appId: '1:17961048201:web:681639cfebfd476ccc8e58',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
