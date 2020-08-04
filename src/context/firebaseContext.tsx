import React, { useEffect } from 'react'
import Fb from 'firebase'

const firebaseInitialState: {
  firebase: Fb.app.App | null
  setFirebase: React.Dispatch<React.SetStateAction<Fb.app.App | null>>
} = { firebase: null, setFirebase: () => {} }

const FirebaseStateContext = React.createContext(firebaseInitialState)

export const useFirebaseState = () => React.useContext(FirebaseStateContext)

export const DB = {
  LOOK_FOR_SELLS: 'look_for_sells',
  LOOK_FOR_BUYS: 'look_for_buys',
  LOOK_FOR_PROPERTY_MANAGEMENTS: 'look_for_property_managements',
  USERS: 'users',
  PAYMENTS: 'payments',
}

const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
}

const FirebaseProvider: React.FC = ({ children }) => {
  const [firebase, setFirebase] = React.useState<Fb.app.App | null>(null)
  useEffect(() => {
    if (!firebase && typeof window !== 'undefined') {
      const app = import('firebase/app')
      const auth = import('firebase/auth')
      const firestore = import('firebase/firestore')

      Promise.all([app, auth, firestore]).then(values => {
        const firebaseInstance = values[0].initializeApp(config)
        setFirebase(firebaseInstance)
      })
    }
  }, [])
  if (!firebase) {
    return null
  }
  return <FirebaseStateContext.Provider value={{ firebase, setFirebase }}>{children}</FirebaseStateContext.Provider>
}
export default FirebaseProvider
