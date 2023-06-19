import React from "react";
import "./homepage.css";
import Userstypes from "../component/Userstypes";
// import Thoughts from "../component/Thoughts";

function Homepage() {
  return (
    <div>
      <br />
      <h1>learning js</h1>
      <br />
      <div className="userstypesflex">
        <Userstypes
          header={"free for all users"}
          pr={"the basics js exercise"}
        />
        <Userstypes
          header={"only for paying users"}
          pr={"the basics js exercise+advanced with answers and more tips"}
        />
      </div>
      <br />
      <br />
      <br />
      <div className="flexpayment">
        <h1>want to get all the exercises hint and help </h1>
        <button> click here</button>
      </div>
      <br />
      <br />
      <br />
      <h2>shared thoughts:</h2>
      <br />
      <div className="thoughtshomepage">
        <Thoughts />
        <Thoughts />
        <Thoughts />
        <Thoughts />
      </div>
    </div>
  );
}

export default Homepage;
