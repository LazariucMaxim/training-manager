import React from "react";

export default function WorkoutsTable({ deleteWorkout, workouts }) {
    return (
        <>
            <div className="workout-list-row-header">
                <span>Дата (ДД.ММ.ГГГГ)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </div>
            <div className="workout-list">
                {Array.isArray(workouts) && workouts.length > 0
                    ? workouts.map((item) => (
                        <div className="workout-list-row" key={item.id}>
                            <span>{item.date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3.$2.$1")}</span>
                            <span>{item.distance}</span>
                            <div>
                                <p className="button-delete"
                                   onClick={() => deleteWorkout(item.id)} >
                                    ✘
                                </p>
                            </div>
                        </div>
                    ))
                    : <div>
                        <p className="no-workout">Список тренировок пуст</p>
                    </div>
                }
            </div>
        </>

    );
}


