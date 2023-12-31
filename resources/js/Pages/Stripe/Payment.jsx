import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios"; // Import Axios
import AlertComponent from "@/Components/Alert";

function Payment({ planDetails }) {
    const { price, id, name } = planDetails;
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertMessage, setShowAlertMessage] = useState("Payment has been done successfully");
    const [alertColor, setAlertColor] = useState('success');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);

        try {
            const data = await createPaymentIntent();
            console.log(data);
            const clientSecret = data.client_secret;

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (result.error) {
                console.error(result.error);
                setLoading(false);
                // Handle payment failure
            } else {
                // Payment successful, process it on the server
                await processPayment(data.id);
                setLoading(false);
                setShowAlert(true);
                window.location.href = "/admin/dashboard";
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            // Handle error
        }
    };

    const createPaymentIntent = async () => {
        try {
            const response = await axios.post("/member/create-payment-intent", {
                membership_level: name,
                membership_id: id,
                amount: price,
                discount: "",
                payment_date: ""
            });

            if (response.data.paymentIntent) {
                return response.data.paymentIntent;
            } else {
                throw new Error("PaymentIntent not found in the response");
            }

        } catch (error) {
            setAlertColor("failure");
            setShowAlertMessage("You already have membership you can renew when they are expire");
            setShowAlert(true);
            // console.error("Error creating payment intent:", error);
            throw error;
        }
    };

    const processPayment = async (paymentIntentId) => {
        try {
            // Make a POST request to process the payment
            const response = await axios.post("/member/process-payment", {
                paymentIntentId,
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const DARK_CARD_OPTIONS = {
        iconStyle: "solid",
        style: {
            base: {
                // backgroundColor: "rgb(31 41 55)",
                iconColor: "#6D28D9",
                color: "black",
                fontWeight: "500",
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",

                ":-webkit-autofill": {
                    color: "#fce883",
                },
                "::placeholder": {
                    color: "#D1D5DB",
                },
            },
            invalid: {
                iconColor: "#ef2961",
                color: "#ef2961",
            },
        },
    };

    return (
        <>
            {showAlert && (
                <AlertComponent color={alertColor}>
                    {showAlertMessage}
                </AlertComponent>
            )}
            <div className="container mt-5 rounded-lg mx-auto my-auto h-screen">
                <div className="p-4 rounded-lg border border-gray-800 dark:border-gray-600 focus:border-purple-700">
                    <form onSubmit={handleSubmit}>
                        <CardElement options={DARK_CARD_OPTIONS} />
                        <div className="mt-2 d-block">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-theme-orange  block w-full text-white border rounded-lg p-5"
                            >
                                {loading ? "Processing..." : "Pay Now"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Payment;
