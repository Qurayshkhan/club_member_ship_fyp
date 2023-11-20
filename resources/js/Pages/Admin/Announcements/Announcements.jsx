import ContentSection from '@/Components/Admin/ContentSection';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react';
import axios from 'axios';
import React, { useState } from 'react'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import AlertComponent from '@/Components/Alert';
function Announcements(props) {

    const [textEditor, setTextEditor] = useState("");
    const [progress, setProgress] = useState("Submit");
    const [isDisabled, setIsDisabled] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    let handleSubmit = (event) => {
        event.preventDefault();
        setProgress("Loading...");
        setIsDisabled(true);
        axios.post('/admin/send-announcements', { 'text': textEditor }).then((response) => {

            console.log(response);
            const { status } = response;
            if (status == 200) {
                setProgress("Submit");
                setIsDisabled(false);
                setTextEditor("");
                setAlertMessage("Announcement has been sent to all members");
                setAlert(true);
            }

        }).catch((error) => {
            console.log(error);
            setProgress("Submit");
            setIsDisabled(false);
        });
    }

    let closeButton = () => {
        setAlert(false);
    }
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title='Create Announcements' />
            <ContentSection heading="Create Announcements">
                {alert &&
                    <AlertComponent close={closeButton}>
                        {alertMessage}
                    </AlertComponent>
                }
                <form onSubmit={handleSubmit} className="w-full">
                    <CKEditor
                        editor={ClassicEditor}
                        data={textEditor}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setTextEditor(data);
                        }}
                    />
                    <div className='text-end'>
                        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={isDisabled}>
                            {progress}
                        </button>
                    </div>
                </form>
            </ContentSection>
        </Authenticated>
    )
}

export default Announcements;
