import React from "react";
import TableComponent from "./Table";

function ContentSection({ heading, children }) {
    return (
        <>
            <div className="p-5 bg-white">
                <div className="text-theme-orange font-[700] text-2xl">
                    <h1>{heading}</h1>
                </div>
            </div>
            <div className="p-5 m-5 bg-white">
                <article>{children}</article>
            </div>
        </>
    );
}

export default ContentSection;
