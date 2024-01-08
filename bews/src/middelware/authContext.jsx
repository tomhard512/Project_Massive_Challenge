import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isToken, setToken] = useState('');

  const login = (token) => {
    // Logika autentikasi di sini
    setLoggedIn(true);
    setToken(token)
  };

  const logout = () => {
    // Logika logout di sini
    setLoggedIn(false);
    setToken('')
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
