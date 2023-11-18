import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';



const localizer = momentLocalizer(moment);

function RoutineCalender({ routines }) {
    const [routineData, setRoutineData] = useState(routines);
    const events = routineData.flatMap((fitnessRoutine) =>
        fitnessRoutine.fitness_routine.map((routine) => ({
            id: routine.id,
            title: `${fitnessRoutine.goal}: ${routine.title}`,
            start: new Date(routine.start_date),
            end: new Date(routine.end_date)
        }))
    );


    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start" // Assuming startAccessor should be "start"
                endAccessor="end" // Assuming endAccessor should be "end"
                style={{ height: 500 }}
            />
        </div>
    );
}

export default RoutineCalender;
