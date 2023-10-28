"use client";

import { Card } from "flowbite-react";

let Cards = ({ props, title, description }) => {
    return (
        <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={props}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{title}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>{description}</p>
            </p>
        </Card>
    );
};
export default Cards;
