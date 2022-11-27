import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto md:mt-36 mt-10 md:mb-24 font-messiri">
      <div className="flex justify-center">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile Pic"
            className="rounded-full w-32"
          />
        ) : (
          <i className="fa-regular fa-circle-user fa-7x"></i>
        )}
      </div>
      <h1 className="font-bold text-2xl text-center">{user?.displayName}</h1>
      <p className="font-semibold text-xl text-center">{user?.email}</p>
    </div>
  );
};

export default UserProfile;
