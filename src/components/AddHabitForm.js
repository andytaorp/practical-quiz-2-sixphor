import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

const handleHabitInput = (e) => {
  setHabitName(e.target.value);
};

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    if (!habitName.trim()) {
      alert("Please enter a habit name.");
      return;
    }
    
    const newHabit ={
      id: Date.now(),
      habitName: habitName,
      completed: false
    };

    onAddHabit(newHabit);
    setHabitName("");

  
  };

  return (
    //TODO: add a form to add a new habit
     <form onSubmit={handleSubmit}>
        <h3>Manage your habits</h3>
        <input
          type="text"
          placeholder="New Habit"
          value={habitName}
          onChange={handleHabitInput}
        />
        <button type="submit">Add Habit</button>
     </form>
  );
}
