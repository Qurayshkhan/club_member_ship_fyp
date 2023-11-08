import ContentSection from '@/Components/Admin/ContentSection';
import Pagination from '@/Components/Pagination';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { Button, Table } from 'flowbite-react';
import React, { useState } from 'react'

function GymClasses(props) {
    const { gymClasses } = usePage().props;
    console.log(gymClasses);
    const [gymClass, setGymClass] = useState(gymClasses);
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title='Gym Classes' />
            <ContentSection heading="Gym Classes">
                <div className="w-full flex justify-end p-2">
                    <Button
                        gradientDuoTone="purpleToBlue"
                    >
                        Add New Classes
                    </Button>
                </div>
                <Table hoverable>
                    <Table.Head className="divide-y">
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Description</Table.HeadCell>
                        <Table.HeadCell>Fee</Table.HeadCell>
                        <Table.HeadCell>Class Time</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="w-full">
                        {gymClass.data.map((item, index) => {
                            const { name, description, fee, class_time } = item;
                            return (
                                <Table.Row
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800 w-full"
                                    key={index}
                                >
                                    <Table.Cell>{name}</Table.Cell>
                                    <Table.Cell>
                                        <div className='w-96 max-h-32 overflow-scroll no-scrollbar'>
                                            {description}
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>Rs {fee}</Table.Cell>
                                    <Table.Cell>
                                        <div className='bg-theme-orange text-white p-1 rounded-lg'>
                                            {class_time}
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="flex gap-2">

                                            <div
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
                                            >
                                                Edit
                                            </div>
                                            <div
                                                className="font-medium text-red-600 hover:underline dark:text-red-500 cursor-pointer"
                                            >
                                                Delete
                                            </div>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}

                    </Table.Body>
                </Table>
                {gymClass && <Pagination class="mt-6" links={gymClass.links} />}
            </ContentSection>
        </Authenticated>
    )
}

export default GymClasses;
