import Hobbies from "./components/Hobbies";
import NewHobbies from "./components/NewHobbies";
import { useState } from "react";

const DUMMY_HOBBIES = [
  {
    id: "h1",
    title: "Soccer",
    description: "Kick the ball into the goal!"
  },
  {
    id: "h2",
    title: "Valorant",
    description: "FPS video game"
  },
  {
    id: "h3",
    title: "Baking",
    description: "Making cakes"
  },
];

function App() {

  const [hobbies, setHobbies] = useState(DUMMY_HOBBIES)

  const addHobbyHandler = (hobby) => {
    setHobbies(prevHobbies => {
      return [hobby, ...prevHobbies]
    })
  }
  
  return(
    <div>
      <h1>Enter your hobbies!</h1>
      <NewHobbies onAddHobby={addHobbyHandler}/>
      <Hobbies items={hobbies}/>
    </div>
  );
}

export default App;
