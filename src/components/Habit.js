import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */

export default function Habit({habitName, completed, handleToggleHabit, handleDeleteHabit}) {
    return (
        <li style={completed ? { textDecoration: "line-through" } : { textDecoration: "" }}>
            <input type="checkbox" checked={completed} onChange={handleToggleHabit}/>
            <span>{habitName}</span>
            <button onClick={handleDeleteHabit}>Delete</button>
        </li>
    )
}
