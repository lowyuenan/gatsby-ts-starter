import React from 'react'
import UserProvider from './src/context/userContext'
import FirebaseProvider from './src/context/firebaseContext'
export const wrapRootElement = ({ element }) => (
  <UserProvider>
    <FirebaseProvider>{element}</FirebaseProvider>
  </UserProvider>
)
