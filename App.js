import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { StyleSheet, Text, View } from 'react-native';
import AuthenticationScreen from './app/screens/AuthenticationScreen';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import AppLoading from 'expo-app-loading';
import firebase from "./firebase"
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)
  const [authError, setAuthError] = useState()
  const [loginMethod, setLoginMethod] = useState('login')

  useEffect(() => {
    setIsReady(false)
    getUser()
  }, [user])

  const getUser = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      setIsReady(true)
    });
  }

  const handleLogin = (values, actions) => {
    const { email, password } = values
    actions.resetForm()
    if (loginMethod === 'login') {
      signInWithEmailAndPassword(firebase.auth, email, password).then(credentials => setUser(credentials.user))
        .catch(err => setAuthError(err.message))
      actions.setSubmitting(false)
    }
    else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
        })
        .catch((error) => {
          setAuthError(error.message)
        });
    }
  }

  const handleLoginMethod = (method) => {
    setLoginMethod(method)
  }

  if (!isReady)
    return (
      <AppLoading
        startAsync={() => getUser()}
        onFinish={() => console.log("logged")}
        onError={() => console.log("Error while loading app")}
      />
    );


  return (
    <>
      {!user
        ? <AuthenticationScreen handleLogin={handleLogin} authError={authError} loginMethod={handleLoginMethod} />
        : <HomeScreen user={user} />
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
