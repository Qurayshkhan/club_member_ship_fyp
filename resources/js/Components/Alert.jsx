"use client";

import { Alert } from "flowbite-react";

function AlertComponent({ children }) {
    return (
        <Alert color="success" onDismiss={() => alert("Alert dismissed!")}>
            <span className="font-medium">Success</span> {children}
        </Alert>
    );
}

export default AlertComponent;
