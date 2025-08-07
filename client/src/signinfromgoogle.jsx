import React, { useEffect, useState, useContext } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import { UserContext } from './UserContext';

function Signin() {
  const [user, setUser] = useState(null);
  const { userProfile, setUserProfile } = useContext(UserContext);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed", error)
  });

  useEffect(() => {
    if (user) {
      axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        }
      )
      .then((res) => {
        console.log("Fetched user:", res.data);
        setUserProfile({
          name: res.data.name,
          email: res.data.email,
          image: res.data.picture,
        });
      })
      .catch((err) => console.log(err));
    }
  }, [user, setUserProfile]);

  const logOut = () => {
    googleLogout();
    setUserProfile(null);
  };

  return (
    <>
      {userProfile ? (
        <div>
          <img src={userProfile.image} alt="user" width="100" height="100" />
          <h3>User Logged in</h3>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <br />
          <button type="button" onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button type="button" id="log-sign" onClick={() => login()}>
          Sign in with <FcGoogle id="google" />
        </button>
      )}
    </>
  );
}

export default Signin;
