import React , {createContext} from "react"
import { useState } from "react"
import { loginRequest, registerRequest } from "./authentication.service"
import * as firebase from "firebase"
export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({children}) => {

  const [user, setUser ] = useState(null)
  const [isLoading, setIsLoading ] = useState(false)
  const [error, setError] = useState(null)
  
  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr)
    } else {
      setIsLoading(false)
    }
  })

  const onLogin = (email, password) => {
    setIsLoading(true)
    return loginRequest(email, password)
      .then(u => {
        setUser(u)
        setIsLoading(false)
      })
      .catch(e => {
        setError(e.toString())
        setIsLoading(false)
      })
  }
  
  const onRegister = (email, password, repeatedPassword) => {
    if (password != repeatedPassword) {
      setError("Passwords do not match!")
      return null
    }
    setIsLoading(true)
    return registerRequest(email, password)
      .then(u => {
        setUser(u)
        setIsLoading(false)
      })
      .catch(e => {
        setError(e.toString())
        setIsLoading(false)
      })
  }

  const onLogout = () => 
    firebase
      .auth()
      .signOut()
      .then(() => setUser(null))

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}