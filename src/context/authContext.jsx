import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axiosInstance from '../utils/axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = sessionStorage.getItem('@appname/user');
    if (accessToken) {
      setUser(JSON.parse(accessToken));
    }
  }, []);

  const registerUser = useCallback(async (values, action) => {
    try {
      const { confirm_password, ...rest } = values;
      const res = await axiosInstance.post('register', rest);
      sessionStorage.setItem('@appname/user', JSON.stringify(res));
      action.resetForm();
      setUser(res);
    } catch (error) {
      action.setFieldError('serverError', error.message);
    }
  }, []);

  const login = useCallback(async (values, action) => {
    try {
      console.log(action);
      const res = await axiosInstance.post('login', values);
      sessionStorage.setItem('@appname/user', JSON.stringify(res));
      action.resetForm();
      setUser(res);
    } catch (error) {
      action.setFieldError('serverError', error.message);
    }
  }, []);

  const logout = useCallback(async () => {
    sessionStorage.clear();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      registerUser,
      login,
      logout,
    }),
    [user, login, logout, registerUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
