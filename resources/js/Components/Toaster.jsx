
'use client';

import { Toast } from 'flowbite-react';
import { HiFire } from 'react-icons/hi';

function ToasterComponent({ message, color }) {
    return (
        <>
            <div className='fixed right-0 top-16 z-50'>
                <Toast className={color}>
                    <div className="p-2 ml-5 text-sm font-normal text-white z-50">{message}</div>
                    {/* <Toast.Toggle /> */}
                </Toast>
            </div>
        </>
    );
}

export default ToasterComponent;
