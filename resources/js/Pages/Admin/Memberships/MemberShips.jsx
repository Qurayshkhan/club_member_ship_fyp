import { Button } from "flowbite-react";
import ContentSection from "@/Components/Admin/ContentSection";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import ModalComponent from "@/Components/Admin/Modal";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import axios from "axios";
import AlertComponent from "@/Components/Alert";
import ToasterComponent from "@/Components/Toaster";
function MemberShips(props) {
    const { memberShips } = usePage().props;
    const [membershipsList, setMembershipsList] = useState(memberShips);
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [showToastMessage, setShowToastMessage] = useState("");

    const [fieldErrors, setFieldErrors] = useState({
        name: "",
        description: "",
        price: "",
        duration: "",
    });
    const [handleInput, setHandleInput] = useState({
        id: "",
        name: "",
        price: "",
        description: "",
        duration: "",
    });

    const showingModal = () => {
        setHandleInput({
            id: "",
            name: "",
            price: "",
            description: "",
            duration: "",
        });
        setFieldErrors({
            name: "",
            description: "",
            price: "",
            duration: "",
        })
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    let handleChange = (event) => {
        const { name, value } = event.target;
        setHandleInput({
            ...handleInput,
            [name]: value,
        });

        setFieldErrors({
            ...fieldErrors,
            [name]: "",
        });
    };

    let handleEdit = (memberShipId) => {

        setFieldErrors({
            name: "",
            description: "",
            price: "",
            duration: "",
        });
        axios.get(`/admin/edit-membership/${memberShipId}`).then((response) => {
            let { data, status } = response;

            if (status == 200) {
                setShowModal(true);
                let { id, name, description, price, duration } = data.data;
                setHandleInput({
                    id: id,
                    name: name,
                    price: price,
                    description: description,
                    duration: duration,
                });
            }


        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/admin/store-membership", handleInput).then((response) => {
            console.log(response);
            let { data, code, message } = response.data;
            console.log(data, "data");
            if (code === 200) {
                setShowAlert(true);
                setAlertMessage(message);
                setTimeout(() => {
                    setShowModal(false);
                    setHandleInput({
                        id: "",
                        name: "",
                        price: "",
                        description: "",
                        duration: "",
                    });
                    setShowAlert(false);
                    setMembershipsList(data);
                }, 2000);
            }
        }).catch((error) => {
            if (error.response && error.response.status === 422) {
                const errorData = error.response.data;
                const errorMessages = errorData.errors;

                // Set the error messages for each field
                setFieldErrors({
                    name: errorMessages.name ? errorMessages.name[0] : "",
                    description: errorMessages.description ? errorMessages.description[0] : "",
                    price: errorMessages.price ? errorMessages.price[0] : "",
                    duration: errorMessages.duration ? errorMessages.duration[0] : "",
                });
            } else {
                console.error("Error while saving membership", error);
            }
        });
    };
    let deleteMembership = (membership_id) => {
        axios.delete(`/admin/delete-membership/${membership_id}`).then((response) => {

            let { data, code, message } = response.data;

            setShowToastMessage(message);
            setShowToast(true);
            setMembershipsList(data);

        }).catch((error) => {

        });
    }

    useEffect(() => {
        setTimeout(() => {
            setShowToast(false)
        }, 2000);
    }, [showToast])

    return (
        <>
            {showToast && <ToasterComponent message={showToastMessage} color="bg-theme-orange" />}
            {showModal && (
                <ModalComponent closeModal={closeModal}>
                    {showAlert && (
                        <AlertComponent>
                            {alertMessage}
                        </AlertComponent>
                    )}
                    <div className="text-theme-orange font-[700] text-lg">
                        <h1>Membership</h1>
                    </div>
                    <div className="mt-4">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="hidden"
                                name="id"
                                id="memberId"
                                value={handleInput.id}
                                onChange={handleChange}
                            />
                            <div className="mb-2">
                                <InputLabel htmlFor="name" value="Name" />
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={handleInput.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={handleChange}

                                />
                                <div className="text-red-500">{fieldErrors.name}</div>
                            </div>
                            <div className="mb-2">
                                <InputLabel
                                    htmlFor="description"
                                    value="Description"
                                />
                                <TextInput
                                    id="description"
                                    name="description"
                                    value={handleInput.description}
                                    className="mt-1 block w-full"
                                    autoComplete="description"
                                    isFocused={true}
                                    onChange={handleChange}

                                />
                                <div className="text-red-500">{fieldErrors.description}</div>
                            </div>
                            <div className="mb-2">
                                <InputLabel htmlFor="price" value="Price" />
                                <TextInput
                                    id="price"
                                    name="price"
                                    type="number"
                                    value={handleInput.price}
                                    className="mt-1 block w-full"
                                    autoComplete="price"
                                    isFocused={true}
                                    onChange={handleChange}

                                />
                                <div className="text-red-500">{fieldErrors.price}</div>
                            </div>
                            <div className="mb-2">
                                <InputLabel
                                    htmlFor="duration"
                                    value="Duration"
                                />
                                <TextInput
                                    id="duration"
                                    name="duration"
                                    type="number"
                                    value={handleInput.duration}
                                    className="mt-1 block w-full"
                                    autoComplete="duration"
                                    isFocused={true}
                                    onChange={handleChange}

                                />
                                <div className="text-red-500">{fieldErrors.duration}</div>
                            </div>
                            <div className="w-full text-end flex justify-end gap-1">
                                <DangerButton onClick={closeModal}>
                                    Close
                                </DangerButton>
                                <PrimaryButton>Create Membership</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </ModalComponent>
            )}
            <Authenticated auth={props.auth} errors={props.errors}>
                <Head title="Memberships" />
                <ContentSection heading="Memberships">
                    <div className="w-full flex justify-end p-2">
                        <Button
                            gradientDuoTone="purpleToBlue"
                            onClick={showingModal}
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
                            {membershipsList.map((item, index) => (
                                <Table.Row
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800 w-full"
                                    key={item.id}
                                >
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>{item.description}</Table.Cell>
                                    <Table.Cell>{item.price}</Table.Cell>
                                    <Table.Cell>{item.duration}</Table.Cell>
                                    <Table.Cell>
                                        <div className="flex gap-2">

                                            <div
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
                                                onClick={() => handleEdit(item.id)}>
                                                Edit
                                            </div>
                                            <div
                                                className="font-medium text-red-600 hover:underline dark:text-red-500 cursor-pointer"
                                                onClick={() => deleteMembership(item.id)}>
                                                Delete
                                            </div>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </ContentSection>
            </Authenticated>
        </>
    );
}

export default MemberShips;
