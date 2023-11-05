import React, { useEffect } from "react";
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Wesite/Navbar";
let MasterLayout = (props) => {
    return (
        <>
            <Navbar props={props} />
        </>
    );
};

export default MasterLayout;
