import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Exercisecontext } from "../context/ExerciseProvider";
import "./selectionpage.css"

function Selectionpage() {
  let filtered = [];
  const location = useLocation();
  const { from } = location.state;
  const info = React.useContext(Exercisecontext);
  console.log(info.exercises);
  filtered = info?.exercises?.filter((item) => item?.title == from);
  console.log(filtered);
  return (
    <div className="Selectionfather">
      <div className="selectioncontainer">
        <br /><br />
      <h1>{from} exercise:</h1>
      {filtered?.map((item) => (
        <Link key={item.exercisename} to="/exercise" state={{ info: item }}>
          <div className="selectioncard">
            <h2 className="selectionh" >{item.exercisename}</h2>
            <p className="selectionp" >{item.question}</p>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default Selectionpage;
