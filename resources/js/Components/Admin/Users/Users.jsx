import React from "react";
import ContentSection from "../ContentSection";
import TableComponent from "../Table";

function Users() {
    const tableHeading = ["Name", "Email", "Verified At", "Action"];
    return (
        <>
            <TableComponent tableHeading={tableHeading} />
        </>
    );
}

export default Users;
