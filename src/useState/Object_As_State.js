import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Dev",
    age: 19,
    email: "dev@gmail.com",
  });
  const updateEmail = () => {
    setUser({ ...user, email: "new@gmail.com" });
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
      <button onClick={updateEmail}>Update Email</button>
    </div>
  );
}

export default UserProfile;
