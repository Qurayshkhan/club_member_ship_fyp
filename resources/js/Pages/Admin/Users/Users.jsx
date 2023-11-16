import { useState } from "react";
import ContentSection from "@/Components/Admin/ContentSection";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { Button, Dropdown, Select, Table } from "flowbite-react";
import React from "react";
import ModalComponent from "@/Components/Admin/Modal";
import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import axios from "axios";
import AlertComponent from "@/Components/Alert";
import TextInput from "@/Components/TextInput";
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
    const [goalModal, setGoalModal] = useState(false);

    const [inputGoal, setInputGoal] = useState({
        member_id: "",
        goal: "",
        initial_weight: "",
        target_weight: "",
        start_date: "",
        target_date: ""
    });

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
                setShowAlert(false);
            }, 2000);
        }).catch((error) => {
            console.log(error);
        });
    }

    let closeModal = () => {
        setShowModal(false);
        setGoalModal(false);
        setShowAlert(false);
    }

    let toggleComponent = () => {
        changeComponent == true ? setChangeComponent(false) : setChangeComponent(true);
    }

    let handleSetGoalId = (id) => {
        setGoalModal(true);
        setShowAlert(false);
        setInputGoal({
            ...inputGoal,
            member_id: id
        });
    }

    let handleGoalInputChange = (event) => {
        const { name, value } = event.target;
        setInputGoal({
            ...inputGoal,
            [name]: value,
        });
    }

    let handleSetGoal = (event) => {
        event.preventDefault();
        axios.post('/admin/fitness-goals', inputGoal).then((response) => {
            const { data, message } = response.data;

            setShowAlertMessage(message);
            setShowAlert(true);
            setTimeout(() => {
                setInputGoal("");
                setShowAlertMessage("");
                setGoalModal(false);
            }, 2000);
        });
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
                                    {gymClasses.data.map((item, index) => (
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

            {goalModal && <ModalComponent>


                {showAlert &&

                    <AlertComponent>
                        {showAlertMessage}
                    </AlertComponent>
                }

                <div className="text-theme-orange font-[700] text-lg">
                    <div className="flex justify-between">
                        <h1>Set Goal</h1>
                    </div>

                </div>
                <div className="pt-2">
                    <form onSubmit={handleSetGoal}>
                        <div className="mb-3">
                            <InputLabel value="Set Goal" />
                            <TextInput className="w-full" name="goal" placeholder="Enter Goal Name" onChange={handleGoalInputChange} />
                        </div>
                        <div className="mb-3">
                            <InputLabel value="Initial Weight" />
                            <TextInput type="number" name="initial_weight" className="w-full" placeholder="Enter Current Weight" onChange={handleGoalInputChange} />
                        </div>
                        <div className="mb-3">
                            <InputLabel value="Target Weight" />
                            <TextInput type="number" name="target_weight" className="w-full" placeholder="Enter Current Weight" onChange={handleGoalInputChange} />
                        </div>
                        <div className="mb-3">
                            <InputLabel value="Start Date" />
                            <TextInput type="date" name="start_date" className="w-full" placeholder="Enter Start Date" onChange={handleGoalInputChange} />
                        </div>
                        <div className="mb-3">
                            <InputLabel value="Target Date" />
                            <TextInput type="date" name="target_date" className="w-full" placeholder="Enter Target Date" onChange={handleGoalInputChange} />
                        </div>
                        <div>
                            <div className="flex gap-2 justify-end">
                                <Button onClick={closeModal} className="bg-gray-800">
                                    Close
                                </Button>
                                <Button type="submit" className="bg-theme-orange">
                                    Set Goal
                                </Button>
                            </div>
                        </div>
                    </form>
                </div >
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

                                                <div>
                                                    <Dropdown label="Menu">
                                                        <Dropdown.Item>
                                                            <div
                                                                className="font-medium  hover:underline dark:text-cyan-500"
                                                                onClick={() => handleAssignClass(id)}>
                                                                Assign Class
                                                            </div>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <div onClick={() => handleSetGoalId(id)}>
                                                                Set Fitness Goal
                                                            </div>
                                                        </Dropdown.Item>
                                                    </Dropdown>
                                                </div>
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
