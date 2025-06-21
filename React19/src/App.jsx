import "./App.css";
import { useState, useOptimistic } from "react";
import { updateName } from "./asynctasks";

const App = () => {
  const [name, setName] = useState("(Empty)");
  const [optName, setOptName] = useOptimistic(name);

  const submitAction = async (formData) => {
    const newName = formData.get("name");
    setOptName(`⏳ ${newName}`);
    const updatedName = await updateName(newName);
    setName(updatedName);
  };

  return (
    <form action={submitAction}>
      <p>Your name is: {optName}</p>
      <p>
        <label>Change Name:</label>
        <input type="text" name="name" />
        <button type="submit">Update</button>
      </p>
    </form>
  );
};

export default App;
