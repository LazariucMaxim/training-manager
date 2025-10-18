import React from "react";
import { useState } from "react";

export default function AddForm({ addWorkout, updateDistance }) {
    const initialFormState = { id: null, date: "", distance: "" };
    const [workout, setWorkout] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        setWorkout({ ...workout, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setWorkout(initialFormState);
        addWorkout(workout);
        updateDistance(workout)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="title">
                <span className="title-date">Дата (ДД.ММ.ГГГГ)</span>
                <span className="title-distance">Пройдено км</span>
            </div>
            <input
                type="date"
                name="date"
                max={new Date().toISOString().split('T')[0]}
                value={workout.date}
                onChange={handleInputChange}
                required
            />
            <input
                type="number"
                name="distance"
                min="0"
                value={workout.distance}
                onChange={handleInputChange}
                required
            />
            <button className="add-workout">OK</button>
        </form>
    );
}
