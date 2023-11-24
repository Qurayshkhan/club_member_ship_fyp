import ContentSection from '@/Components/Admin/ContentSection'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head, usePage } from '@inertiajs/react'
import { Table } from 'flowbite-react';
import React, { useState } from 'react'

function AccountDetails(props) {
    const { accountDetails } = usePage().props;
    const [memberAccount, setMemberAccount] = useState(accountDetails);
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title='Account Details' />
            <ContentSection heading="Account Details">
                <Table hoverable>
                    <Table.Head className="divide-y">
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Membership Level</Table.HeadCell>
                        <Table.HeadCell>Paid Amount</Table.HeadCell>
                        <Table.HeadCell>discount</Table.HeadCell>
                        <Table.HeadCell>Payment Date</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="w-full">
                        {memberAccount.map((item, index) => {
                            const { membership_level, amount, discount, payment_date, user } = item;
                            return (
                                <Table.Row
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800 w-full"
                                    key={index}
                                >
                                    <Table.Cell>{user.name}</Table.Cell>
                                    <Table.Cell>
                                        {membership_level}
                                    </Table.Cell>
                                    <Table.Cell>Rs {amount}</Table.Cell>
                                    <Table.Cell>
                                        {discount}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className='bg-theme-orange text-white p-1 rounded-lg'>
                                            {payment_date}
                                        </div>
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

export default AccountDetails
