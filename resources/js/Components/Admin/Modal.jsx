import { children, useState, useEffect } from "react";
import ReactDOM from "react-dom";
let ModalComponent = ({ children, closeModal }) => {
    useEffect(() => {
        document.body.style.overflowY = "hidden";

        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);

    return ReactDOM.createPortal(
        <>
            <div className="modal-wrapper" onClick={closeModal}></div>
            <div className="modal-container">{children}</div>
        </>,
        document.getElementById("portal")
    );
};

export default ModalComponent;
