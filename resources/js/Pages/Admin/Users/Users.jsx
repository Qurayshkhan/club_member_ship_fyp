import { useState } from "react";
import ContentSection from "@/Components/Admin/ContentSection";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { Table } from "flowbite-react";
import React from "react";

function Users(props) {
    const { users } = usePage().props;
    const [user, setUser] = useState(users);

    return (
        <>
            <Authenticated auth={props.auth} errors={props.errors}>
                <Head title="Users" />
                <ContentSection heading="Users">
                    <div className="overflow-x-auto">
                        <Table hoverable className="overflow-auto">
                            <Table.Head className="divide-y">
                                <Table.HeadCell>Name</Table.HeadCell>
                                <Table.HeadCell>Email</Table.HeadCell>
                                <Table.HeadCell>Member Details</Table.HeadCell>
                                <Table.HeadCell>Action</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="w-full">
                                {user.map((item, index) => {
                                    const { name, email, memberships } = item;
                                    console.log(memberships);
                                    return (
                                        <Table.Row
                                            className="bg-white dark:border-gray-700 dark:bg-gray-800 w-full"
                                            key={index}
                                        >
                                            <Table.Cell>{name}</Table.Cell>
                                            <Table.Cell>{email}</Table.Cell>
                                            <Table.Cell>
                                                <div className="text-orange-700">
                                                    {memberships.length > 0 ? (
                                                        memberships.map(
                                                            (
                                                                membership,
                                                                index
                                                            ) => (
                                                                <div
                                                                    key={index}
                                                                >
                                                                    <p>
                                                                        Name:
                                                                        {
                                                                            membership.name
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        Price:
                                                                        {
                                                                            membership.price
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        Months:
                                                                        {
                                                                            membership.duration
                                                                        }
                                                                    </p>
                                                                </div>
                                                            )
                                                        )
                                                    ) : (
                                                        <p>
                                                            Not membership yet
                                                        </p>
                                                    )}
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                    href="/tables"
                                                >
                                                    <p>Edit</p>
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                    );
                                })}
                            </Table.Body>
                        </Table>
                    </div>
                </ContentSection>
            </Authenticated>
        </>
    );
}

export default Users;
