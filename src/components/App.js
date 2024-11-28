import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habitName) => {
    // TODO: write code to add a new habit here
    setHabits((habits) => [...habits, habitName]);
  };

  const handleToggleHabit = (id) => {
    // TODO: write code to toggle a habit's status
    setHabits((habits) => {
      habits.map((habitName) => habits.id === id ? { ...habitName, completed: !habitName.completed } : habitName);
    })
  };

  const handleDeleteHabit = (id) => {
    // TODO: write code to delete a habit
    setHabits((habits) => habits.filter((habitName) => habitName.id !== id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      {/*TODO: add a form to add a new habit*/}
      <AddHabitForm onAddHabit={handleAddHabit} />
      {/*TODO: add a list of habits*/}
      <HabitList
        habits={habits} 
        handleToggleHabit={handleToggleHabit}
        onDeleteHabit={handleDeleteHabit}
      />
    </div>
  );
}

export default App;
