import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { StyleSheet, Text, View } from 'react-native';
import AuthenticationScreen from './app/screens/AuthenticationScreen';
import { signInWithEmailAndPassword } from "firebase/auth";
import AppLoading from 'expo-app-loading';
import firebase from "./firebase"
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)
  const [authError, setAuthError] = useState()

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

  const handleLogin = async (values, actions) => {
    const { email, password } = values
    actions.resetForm()
    await signInWithEmailAndPassword(firebase.auth, email, password).then(credentials => setUser(credentials.user))
      .catch(err => setAuthError(err.message))
  }

  if (!isReady)
    return (
      <AppLoading
        startAsync={() => getUser()}
        onFinish={() => console.log("logged")}
        onError={console.warn}
      />
    );


  return (
    <>
      {!user
        ? <AuthenticationScreen handleLogin={handleLogin} authError={authError} />
        : <HomeScreen />
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
