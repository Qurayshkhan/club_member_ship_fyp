"use client";

import { Alert } from "flowbite-react";

function AlertComponent({ children, close }) {
    return (
        <Alert color="success" onDismiss={close}>
            <span className="font-medium">Success</span> {children}
        </Alert>
    );
}

export default AlertComponent;
