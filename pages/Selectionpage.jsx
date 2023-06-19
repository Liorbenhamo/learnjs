import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Exercisecontext } from "../context/ExerciseProvider";

function Selectionpage() {
  let filtered = [];
  const location = useLocation();
  const { from } = location.state;
  const info = React.useContext(Exercisecontext);
  console.log(info.exercises);
  filtered = info?.exercises?.filter((item) => item?.title == from);
  console.log(filtered);
  return (
    <div>
      {filtered?.map((item) => (
        <Link key={item.exercisename} to="/exercise" state={{ info: item }}>
          <div>{item.exercisename}</div>
        </Link>
      ))}
    </div>
  );
}

export default Selectionpage;
