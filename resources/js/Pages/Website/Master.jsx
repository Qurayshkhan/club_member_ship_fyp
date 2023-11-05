import Navbar from "@/Components/Wesite/Navbar";
import React from "react";

function Master({ props, children }) {
    return (
        <>
            <div className="h-screen  bg-gray-900">
                <section>
                    <Navbar props={props} />
                </section>
                {children}
            </div>
        </>
    );
}

export default Master;
