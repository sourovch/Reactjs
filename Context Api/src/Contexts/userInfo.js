import { useState, createContext, useContext } from 'react';
import React from 'react';

const userInfoContext = createContext({});
const modInfoContext = createContext();
userInfoContext.displayName = 'userInfoProvider';
modInfoContext.displayName = 'modProvider';

// hooks
export const useUserData = () => {
  return useContext(userInfoContext);
};

export const useModUserInfoFn = () => {
  return useContext(modInfoContext);
};

// component
const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    id: null,
    age: null,
    loggedIn: false,
  });

  const setInfo = (userData) => {
    setUserInfo((v) => {
      return { ...v, ...userData };
    });
  };

  return (
    <userInfoContext.Provider value={userInfo}>
      <modInfoContext.Provider value={setInfo}>
        {children}
      </modInfoContext.Provider>
    </userInfoContext.Provider>
  );
};

export default AuthProvider;
