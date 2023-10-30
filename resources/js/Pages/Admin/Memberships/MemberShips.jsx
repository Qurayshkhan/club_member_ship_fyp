"use client";

import { Button, Modal } from "flowbite-react";
import ContentSection from "@/Components/Admin/ContentSection";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import { Table } from "flowbite-react";

function MemberShips(props) {
    const [memberships, setMemberships] = useState([]);
    // const [showModel, setShowModal] = useState(false);

    const [openModal, setOpenModal] = useState();
    const propsModal = { openModal, setOpenModal };

    // const closeModal = () => {
    //     setShowModal(false);
    // };

    // const showModal = () => {
    //     setShowModal(true);
    // };
    return (
        <>
            <Modal
                dismissible
                show={propsModal.openModal === "dismissible"}
                onClose={() => propsModal.setOpenModal(undefined)}
            >
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European
                            Union enacts new consumer privacy laws for its
                            citizens, companies around the world are updating
                            their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection
                            Regulation (G.D.P.R.) goes into effect on May 25 and
                            is meant to ensure a common set of data rights in
                            the European Union. It requires organizations to
                            notify users as soon as possible of high-risk data
                            breaches that could personally affect them.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => propsModal.setOpenModal(undefined)}>
                        I accept
                    </Button>
                    <Button
                        color="gray"
                        onClick={() => propsModal.setOpenModal(undefined)}
                    >
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>

            <Authenticated auth={props.auth} errors={props.errors}>
                <Head title="Memberships" />
                <ContentSection heading="Memberships">
                    <div className="w-full flex justify-end p-2">
                        <Button
                            gradientDuoTone="purpleToBlue"
                            onClick={() =>
                                propsModal.setOpenModal("dismissible")
                            }
                        >
                            Add Membership
                        </Button>
                    </div>
                    <Table hoverable>
                        <Table.Head className="divide-y">
                            <Table.HeadCell>Name</Table.HeadCell>
                            <Table.HeadCell>Description</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>
                            <Table.HeadCell>Duration</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="w-full">
                            {memberships.map((item, index) => {
                                return (
                                    <>
                                        <Table.Row
                                            className="bg-white dark:border-gray-700 dark:bg-gray-800 w-full"
                                            key={item.id}
                                        >
                                            <Table.Cell>{item.name}</Table.Cell>
                                            <Table.Cell>
                                                {item.email}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item.email_verified_at}
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
                                    </>
                                );
                            })}
                        </Table.Body>
                    </Table>
                </ContentSection>
            </Authenticated>
        </>
    );
}

export default MemberShips;
