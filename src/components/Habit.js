import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */

export default function Habit({habit, onToggleHabit, onDeleteHabit}) {
    return (
        <li style={habit.completed ? { textDecoration: "line-through" } : { textDecoration: "" }}>
            <input type="checkbox" checked={habit.completed} onChange={() => onToggleHabit(habit.id)}/>
            <span>{habit.habitName}</span>
            <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
        </li>
    )
}
