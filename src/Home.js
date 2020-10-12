import React from "react";
import app from "./base";

const Home = () => {
  return (
    <>
      <h1>Welcome to the Musles Army</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
