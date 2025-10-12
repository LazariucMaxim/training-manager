import React from "react";
import { useState } from "react";
import { isValidDate, isValidDistance } from "../../utils";

export default function AddForm({ addWorkout, updateDistance }) {
    const initialFormState = { id: null, date: "", distance: "" };
    const [workout, setWorkout] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        setWorkout({ ...workout, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!workout.date || !workout.distance) {
            return alert("Заполните все поля!");
        } else if (isValidDate(workout.date) === false) {
            return alert("Введите дату в правильном формате! Пример: 08.08.2023");
        } else if (isValidDistance(workout.distance) === false) {
            return alert("Введите дистанцию в правильном формате! Пример: 5.5 км");
        } else {
            setWorkout(initialFormState);
            addWorkout(workout);
            updateDistance(workout)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="title">
                <span className="title-date">Дата (ДД.ММ.ГГГГ)</span>
                <span className="title-distance">Пройдено км</span>
            </div>
            <input
                type="text"
                name="date"
                value={workout.date}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="distance"
                value={workout.distance}
                onChange={handleInputChange}
            />
            <button className="add-workout">OK</button>
        </form>
    );
}
