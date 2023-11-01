"use client";

import { Datepicker } from "flowbite-react";

function DatepickerComponent() {
    return (
        <Datepicker
            minDate={new Date(2023, 0, 1)}
            maxDate={new Date(2023, 3, 30)}
        />
    );
}

export default DatepickerComponent;
