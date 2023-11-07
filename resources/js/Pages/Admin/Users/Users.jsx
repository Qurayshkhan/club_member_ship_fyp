import { useState } from "react";
import ContentSection from "@/Components/Admin/ContentSection";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { Button, Select, Table } from "flowbite-react";
import React from "react";
import Modal from "@/Components/Modal";
import ModalComponent from "@/Components/Admin/Modal";
import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import InputSelect from "@/Components/InputSelect";
import axios from "axios";
import AlertComponent from "@/Components/Alert";

function Users(props) {
    const { users, gym_classes } = usePage().props;
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertMessage, setShowAlertMessage] = useState("");
    const [handleInput, setHandleInput] = useState({
        member_id: "",
        gym_class_id: "",
    });


    const [changeComponent, setChangeComponent] = useState(false);

    const [user, setUser] = useState(users);


    const [gymClasses, setGymClasses] = useState(gym_classes);


    let handleChange = (event) => {
        const { name, value } = event.target;

        setHandleInput({
            ...handleInput,
            [name]: value,
        })
    }

    let handleAssignClass = (id) => {
        setHandleInput({
            ...handleInput,
            member_id: id,
        });

        setShowAlert(false);
        setShowAlertMessage("");
        setShowModal(true);

    }

    let handleSubmit = (event) => {
        event.preventDefault();
        let response = axios.post('/admin/assign-class-to-member', handleInput).then((response) => {
            console.log(response);
            const { data, message } = response.data;
            setUser(data);
            setShowAlert(true);
            setShowAlertMessage(message);

            setTimeout(() => {
                setShowModal(false);
            }, 2000);
        }).catch((error) => {
            console.log(error);
        });
    }

    let closeModal = () => {
        setShowModal(false);
    }

    let toggleComponent = () => {
        changeComponent == true ? setChangeComponent(false) : setChangeComponent(true);
    }
    return (
        <>
            {showModal && <ModalComponent>

                <div className="text-theme-orange font-[700] text-lg">
                    <div className="flex justify-between">
                        <h1>Assign Class</h1>
                        <div onClick={toggleComponent}>
                            <Button>
                                Member Classes
                            </Button>
                        </div>
                    </div>

                </div>
                {!changeComponent &&
                    <div className="mt-4">
                        {showAlert &&

                            <AlertComponent>
                                {showAlertMessage}
                            </AlertComponent>
                        }
                        <form onSubmit={handleSubmit}>

                            <div className="mb-2">
                                <InputLabel htmlFor="gymClasses" value="Classes" />
                                <Select onChange={handleChange} name="gym_class_id">
                                    {gymClasses.map((item, index) => (
                                        <option value={item.id}>{item.name}</option>
                                    ))}
                                </Select>
                                {/* <div className="text-red-500">{fieldErrors.name}</div> */}
                            </div>
                            <div className="w-full text-end flex justify-end gap-1">
                                <DangerButton onClick={closeModal}>Cancel</DangerButton>
                                <PrimaryButton>Assign</PrimaryButton>
                            </div>
                        </form>
                    </div>

                }

                {changeComponent &&
                    <div className="mt-4">
                        {user.map((item, index) => (
                            <div key={index} class="h-48 overflow-auto no-scrollbar">
                                <Table hoverable className="overflow-auto">
                                    <Table.Head className="divide-y">
                                        <Table.HeadCell>Class Name</Table.HeadCell>
                                        <Table.HeadCell>Class Fee</Table.HeadCell>
                                        <Table.HeadCell>Class Time</Table.HeadCell>


                                    </Table.Head>

                                    <Table.Body className="w-full">
                                        {item.gym_classes.map((item, index) => (
                                            <Table.Row
                                                className="bg-white dark:border-gray-700 dark:bg-gray-800 w-full"
                                                key={index}
                                            >

                                                <Table.Cell>{item.name}</Table.Cell>
                                                <Table.Cell>Rs {item.fee}</Table.Cell>
                                                <Table.Cell>{item.class_time}</Table.Cell>

                                            </Table.Row>
                                        ))}
                                    </Table.Body>
                                </Table>

                            </div>
                        ))}
                    </div>
                }
            </ModalComponent >}

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
                                    const { id, name, email, memberships } = item;
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
                                                    href="#"
                                                    onClick={() => handleAssignClass(id)}>
                                                    <p>Assign Class</p>
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
