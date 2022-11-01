import React from 'react';
import { useUserData } from '../Contexts/userInfo';

function Profile() {
  const userData = useUserData();
  return (
    <div>
      <h3>Name: {userData?.name}</h3>
      <h4>Age: {userData?.age}</h4>
      <h4>Id: {userData?.id}</h4>
    </div>
  );
}

export default Profile;
