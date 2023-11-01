"use client";

import { Table } from "flowbite-react";
import { useState } from "react";

let TableComponent = ({ tableHeading }) => {
    const [tableHeadingCell, setTableHeading] = useState(tableHeading);
    return (
        <Table hoverable>
            <Table.Head className="divide-y">
                {tableHeadingCell.map((item) => {
                    return (
                        <>
                            <Table.HeadCell>{item}</Table.HeadCell>
                        </>
                    );
                })}
            </Table.Head>
            <Table.Body className="w-full">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 w-full">
                    <Table.Cell>Apple MacBook Pro 17"</Table.Cell>
                    <Table.Cell>Sliver</Table.Cell>
                    <Table.Cell>Laptop</Table.Cell>
                    <Table.Cell>
                        <a
                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                            href="/tables"
                        >
                            <p>Edit</p>
                        </a>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};
export default TableComponent;
