import "./App.css";
import { useState } from "react";
import AddForm from './Components/AddForm/AddForm.jsx';
import WorkoutsTable from './Components/WorkoutsTable/WorkoutsTable.jsx';
import { sortByDate } from "./utils";

export default function App() {
    const [workouts, setWorkouts] = useState([]);

    const addWorkout = (workout) => {
        workout.id = workouts.length + 1;
        setWorkouts([...workouts, workout].sort(sortByDate));
    };

    const updateDistance = (workout) => {
        const dateIndex = workouts.findIndex(({ date }) => workout.date === date);
        const existedDate = workouts[dateIndex];
        const newWorkout = {
            ...existedDate,
            distance: Number(existedDate.distance) + Number(workout.distance)
        };
        const newWorkouts = [...workouts];
        newWorkouts[dateIndex] = newWorkout;
        setWorkouts(newWorkouts);
    }

    const deleteWorkout = (id) => {
        setWorkouts(workouts.filter((i) => i.id !== id));
    };

    return (
        <div className="wrapper">
            <AddForm addWorkout={addWorkout} updateDistance={updateDistance} />
            <WorkoutsTable workouts={workouts} deleteWorkout={deleteWorkout} />
        </div>
    )
};
