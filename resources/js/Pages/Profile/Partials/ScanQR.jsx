import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from 'axios';
import AlertComponent from '@/Components/Alert';
import { usePage } from '@inertiajs/inertia-react';

function ScanQR() {
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertMessage, setShowAlertMessage] = useState("");

    useEffect(() => {

        let scanner = new Html5QrcodeScanner("reader", {
            qrbox: {
                width: 250,
                height: 250
            },
            fps: 5,
        });

        scanner.render(success, error);

        function success(result) {
            scanner.clear();

            axios.post('/scan-attendance', { email: result }).then((response) => {
                const { message } = response.data;
                setShowAlertMessage(message);
                setShowAlert(true);
                setTimeout(() => {
                    window.location.href = '/';
                }, 2000);
            });
            // setScanResult(result);

        }

        function error(error) {
            console.log(error);
        }

    }, []);



    return (
        <>
            <div className='h-screen'>
                {showAlert && <AlertComponent>
                    {showAlertMessage}
                </AlertComponent>}
                <div className="container mx-auto h-full w-[50%] mt-24">
                    <div id='reader'></div>
                </div>
            </div>
        </>
    );
}

export default ScanQR;
