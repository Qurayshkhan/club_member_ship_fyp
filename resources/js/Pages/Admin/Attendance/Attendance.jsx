import ContentSection from '@/Components/Admin/ContentSection';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { Table } from 'flowbite-react';
import React, { useState } from 'react'

function Attendance(props) {
    const { attendances } = usePage().props;
    const [userAttendance, setUserAttendance] = useState(attendances);
    console.log(userAttendance);
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title='Account Details' />
            <ContentSection heading="Attendances Details">
                <Table hoverable>
                    <Table.Head className="divide-y">
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>CheckIn Date</Table.HeadCell>
                        <Table.HeadCell>CheckOut Date</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="w-full">
                        {userAttendance.map((item, index) => {
                            const { check_in, check_out, status, user } = item;
                            return (
                                <Table.Row
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800 w-full"
                                    key={index}
                                >
                                    <Table.Cell>{user.name}</Table.Cell>
                                    <Table.Cell>
                                        {check_in}
                                    </Table.Cell>
                                    <Table.Cell>{check_out}</Table.Cell>
                                    <Table.Cell>
                                        {status}
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}

                    </Table.Body>
                </Table>
            </ContentSection>
        </Authenticated>
    )
}

export default Attendance;
