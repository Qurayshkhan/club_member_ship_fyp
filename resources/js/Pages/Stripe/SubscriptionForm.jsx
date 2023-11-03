import React from "react";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"; // Import loadStripe
import { usePage } from "@inertiajs/inertia-react";

const stripePromise = loadStripe(
    "pk_test_51O83ztGi5AwSjR95RkQGgCYkoRXVy71ksKEN3IcRNYP6Ky1i1BrycQJ6AZMQGRXm4Lc7L702WMc7yTzFXZyXOkUC00zowX4lIT"
);
function SubscriptionForm({ membership_plan }) {
    // const { membership_plan } = usePage().props;
    return (
        <>
            <Elements stripe={stripePromise}>
                <Payment planDetails={membership_plan} />
            </Elements>
        </>
    );
}

export default SubscriptionForm;
