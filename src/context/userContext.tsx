import React from 'react'
import fb from 'firebase'
import { AgentFormData } from '../pages/sign-up-form'

export interface User {
  fbUser: fb.User
  userData: AgentFormData
}

const userInitialState: {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
} = { user: null, setUser: () => {} }

const UserStateContext = React.createContext(userInitialState)

export const useUserState = () => React.useContext(UserStateContext)

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState(userInitialState.user)
  return <UserStateContext.Provider value={{ user, setUser }}>{children}</UserStateContext.Provider>
}
export default UserProvider
