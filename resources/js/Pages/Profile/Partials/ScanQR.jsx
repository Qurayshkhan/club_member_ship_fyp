import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from 'axios';

function ScanQR() {

    const [scanResult, setScanResult] = useState("");
    const [handleInput, setHandleInput] = useState({
        email: "",
    });

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

            setHandleInput({ email: result });

            axios.post('/scan-attendance', { email: result });
            // setScanResult(result);

        }

        function error(error) {
            console.log(error);
        }

    }, []);



    return (
        <>
            <div className='h-screen'>
                <div className="container mx-auto h-full w-[50%] mt-24">
                    <div id='reader'></div>


                    {scanResult ? <div>Success: {scanResult}</div> : ""}
                </div>
            </div>
        </>
    );
}

export default ScanQR;
