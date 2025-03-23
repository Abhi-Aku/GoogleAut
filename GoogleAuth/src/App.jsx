import React from 'react';
import { auth, provider } from './utils/Firebash';
import { signInWithPopup } from 'firebase/auth';

const App = () => {
  const googleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      console.log(response.user.email
      ); 
    } catch (error) {
      console.error("Error during sign-in: ", error);
    }
  };

  return (
    <>
      <h1>Google login</h1>
      <button  className=' bg-blue-500' onClick={googleLogin}>Login with Google</button>
    </>
  );
};

export default App;
