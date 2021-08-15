import React , {createContext} from "react"
import { useState } from "react"
import { loginRequest } from "./authentication.service"

const AuthenticationContext = createContext()

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
        setError(e)
        setIsLoading(false)
      })

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}