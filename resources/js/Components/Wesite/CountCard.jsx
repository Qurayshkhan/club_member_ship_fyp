"use client";

import { Card } from "flowbite-react";

let CountCard = ({ props, title, count, backgroundColor, textColor }) => {
    return (
        <Card style={{ "background": backgroundColor, "color": textColor }}>
            <div className="flex justify-between">
                <div className="text-2xl font-bold tracking-tight  dark:text-white">
                    {/* <p>{title}</p> */}
                    <div>{title}</div>
                </div>
                <div className="text-2xl font-bold tracking-tight dark:text-white">
                    {/* <p>{description}</p> */}
                    <div>{count}</div>
                </div>
            </div>
        </Card>
    );
};
export default CountCard;
