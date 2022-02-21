import React from 'react';
import { useMoralis } from 'react-moralis';
import { Text, TouchableOpacity } from 'react-native';

const Settings = (props) => {
  const {
    authenticate,
    authError,
    isAuthenticating,
    isAuthenticated,
    logout,
    Moralis,
  } = useMoralis();

  const logoutUser = () => {
    if (isAuthenticated) {
      logout();
      props.navigation.replace("Auth");
    }
  };

  return (
    <>
      <Text>Settings</Text>
      <TouchableOpacity onPress={() => logoutUser()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </>
  )
}

export default Settings;