"use client";

import axios from "axios";
import { Card } from "flowbite-react";
import { useState } from "react";

let PricingCard = ({ id, name, price, description, duration }) => {

    const [planId, setPlanId] = useState({
        membership_plan_id: id,
    })
    const handleSubmit = (event) => {
        // event.preventDefault();
        // axios.get('/member/buy-subscription', planId);
    }

    return (
        <Card>
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                {name}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">
                    {price}
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    /{duration} month
                </span>
            </div>
            <div className="my-7 space-y-5">
                <div className="w-[300px]">

                    {description}
                </div>
            </div>


            <form onSubmit={handleSubmit}>
                <input type="hidden" name="membership_plan_id" value={planId.id} />
                <button
                    className="inline-flex w-full justify-center rounded-lg bg-theme-orange px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-theme-orange focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                    type="submit"
                >
                    <p>Choose plan</p>
                </button>
            </form>
        </Card>
    );
};
export default PricingCard;
