import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);

  const toggleStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <>
      <p>User is {isOnline ? "en ligne" : "hors ligne"}</p>
      <button onClick={toggleStatus}>Click to change user status</button>
    </>
  );
}

export default UserProfile;
