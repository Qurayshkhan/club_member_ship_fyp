import ContentSection from '@/Components/Admin/ContentSection';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function DietPlans(props) {
    const [isDisable, setIsDisable] = useState(false);
    const [buttonText, setButtonText] = useState("Calculate Diet Plan");
    const [dietPlanInput, setDietPlanInput] = useState({
        age: "",
        gender: "",
        height: "",
        weight: "",
        activitylevel: ""
    });

    const [showForm, setShowForm] = useState(true);
    const [showResults, setShowResults] = useState(false);
    const [appendResult, setAppendResult] = useState({
        calorie: "",
        balanced: "",
        highprotein: "",
        lowcarbs: "",
        lowfat: "",
    });

    let inputHandle = (event) => {
        const { name, value } = event.target;
        setDietPlanInput({
            ...dietPlanInput,
            [name]: value
        });
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        setButtonText("Loading...");
        setIsDisable(true);

        try {
            axios.post('/member/calculate-diet-plan', dietPlanInput).then((response) => {
                console.log(response);

                const { data, status } = response;
                if (status == 200) {
                    const { calorie, balanced, highprotein, lowcarbs, lowfat } = data.data;
                    setAppendResult({
                        calorie: calorie,
                        balanced: balanced,
                        highprotein: highprotein,
                        lowcarbs: lowcarbs,
                        lowfat: lowfat,
                    });
                    setIsDisable(false);
                    setButtonText("Calculate Diet Plan");
                    setShowForm(false);
                    setShowResults(true);
                }

            }).catch((error) => {
                console.log(error, "error");
                setIsDisable(false);
                setButtonText("Calculate Diet Plan");
            });
        } catch (error) {
            console.log(error);
            setIsDisable(false);
            setButtonText("Calculate Diet Plan");
        }
    }

    let handleBackButton = () => {
        setShowResults(false);
        setShowForm(true);
    }
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Diet Plans" />
            <ContentSection heading="Diet Plans">
                <div className="container">
                    {showForm &&
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <InputLabel value="Goal" />
                                <TextInput type="text" name="goal" className="w-full" placeholder="Enter Goal" onChange={inputHandle} />
                            </div>
                            <div className="mb-3">
                                <InputLabel value="Age" />
                                <TextInput type="text" name="age" className="w-full" placeholder="Enter Age" onChange={inputHandle} />
                            </div>
                            <div className="mb-3">
                                <InputLabel value="Gender" />
                                <TextInput type="text" name="gender" className="w-full" placeholder="Enter gender" onChange={inputHandle} />
                            </div>
                            <div className="mb-3">
                                <InputLabel value="Height" />
                                <TextInput type="text" name="height" className="w-full" placeholder="Enter Height" onChange={inputHandle} />
                            </div>
                            <div className="mb-3">
                                <InputLabel value="Weight" />
                                <TextInput type="text" name="weight" className="w-full" placeholder="Enter Weight" onChange={inputHandle} />
                            </div>
                            <div className="mb-3">
                                <InputLabel value="Activity level" />
                                <TextInput type="text" name="activitylevel" className="w-full" placeholder="Enter Activity level" onChange={inputHandle} />
                            </div>
                            <div className='w-full'>
                                <button className='bg-theme-orange block w-full text-white p-3 rounded' disabled={isDisable}>{buttonText}</button>
                            </div>
                        </form>
                    }
                    {showResults &&
                        <div>
                            <h1 className='text-theme-orange text-2xl text-center font-[700]'>Daily Diet</h1>
                            <button className='bg-theme-orange text-white p-2 mb-2' onClick={handleBackButton}>Back</button>
                            <hr />
                            <div className='flex justify-between m-5 items-center'>
                                <div className='text-xl font-[700]'>
                                    <div className='mb-2'>Calories: {appendResult.calorie}</div>
                                    <div className='text-theme-orange text-2xl font-[700]'>
                                        High Protein
                                    </div>
                                    <div className='mb-2'>Protein: {appendResult.highprotein.protein}</div>
                                    <div className='mb-2'>Fat: {appendResult.highprotein.fat}</div>
                                    <div className='mb-2'>Carbs: {appendResult.highprotein.carbs}</div>
                                    <div className='text-theme-orange text-2xl font-[700]'>
                                        Low Carbs
                                    </div>
                                    <div className='mb-2'>Protein: {appendResult.lowcarbs.protein}</div>
                                    <div className='mb-2'>Fat: {appendResult.lowcarbs.fat}</div>
                                    <div className='mb-2'>Carbs: {appendResult.lowcarbs.carbs}</div>
                                </div>
                                <div className='text-2xl font-[700]'>
                                    <div className='mb-2'>Calories: {appendResult.calorie}</div>
                                    <div className='text-theme-orange text-2xl font-[700]'>
                                        Balanced
                                    </div>
                                    <div className='mb-2'>Protein: {appendResult.balanced.protein}</div>
                                    <div className='mb-2'>Fat: {appendResult.balanced.fat}</div>
                                    <div className='mb-2'>Carbs: {appendResult.balanced.carbs}</div>
                                    <div className='text-theme-orange text-2xl font-[700]'>
                                        Low Fats
                                    </div>
                                    <div className='mb-2'>Protein: {appendResult.lowfat.protein}</div>
                                    <div className='mb-2'>Fat: {appendResult.lowfat.fat}</div>
                                    <div className='mb-2'>Carbs: {appendResult.lowfat.carbs}</div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </ContentSection>
        </Authenticated>
    )
}

export default DietPlans;
