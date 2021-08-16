import React , {createContext} from "react"
import { useState } from "react"
import { loginRequest, registerRequest } from "./authentication.service"

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({children}) => {

  const [user, setUser ] = useState(null)
  const [isLoading, setIsLoading ] = useState(false)
  const [error, setError] = useState(null)
  
  const onLogin = (email, password) =>
    loginRequest(email, password)
      .then(u => {
        setUser(u)
        setIsLoading(false)
      })
      .catch(e => {
        setError(e.toString())
        setIsLoading(false)
      })
  
  const onRegister = (email, password, repeatedPassword) => {
    if (password != repeatedPassword) {
      setError("Passwords do not match!")
      return null
    }
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


  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}