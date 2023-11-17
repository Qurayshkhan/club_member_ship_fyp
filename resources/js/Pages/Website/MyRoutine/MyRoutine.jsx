import ContentSection from '@/Components/Admin/ContentSection';
import RoutineCalender from '@/Components/Wesite/RoutineCalender';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import React, { useState } from 'react'

function MyRoutine(props) {
    const { goals } = usePage().props;
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="My Routine" />
            <ContentSection heading="My Routine">
                <RoutineCalender routines={goals} />
            </ContentSection>
        </Authenticated>
    )
}

export default MyRoutine;
