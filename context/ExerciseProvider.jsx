import React, { createContext, useEffect, useState } from "react";
export const Exercisecontext = createContext();

function ExerciseProvider({ children }) {
  const [exercises, setExercises] = useState();
  useEffect(() => {
    const test = async () => {
      try {
        const res = await fetch("http://localhost:3000/exercise/take");
        const data = await res.json();
        setExercises(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    test();
  }, []);
  return (
    <div>
      <Exercisecontext.Provider value={{ exercises, setExercises }}>
        {children}
      </Exercisecontext.Provider>
    </div>
  );
}

export default ExerciseProvider;
