"use client";

import { Alert } from "flowbite-react";

function AlertComponent({ children, close, color = "success" }) {
    return (
        <Alert color={color} onDismiss={close}>
            <span className="font-medium">Success</span> {children}
        </Alert>
    );
}

export default AlertComponent;
