import SideBar from "@/Components/Admin/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        // header={
        //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        //         Dashboard
        //     </h2>
        // }
        >
            <Head title="Dashboard" />

            <div className="">
                <div className="">
                    {/* <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div> */}
                    <div className="flex gap-1">
                        <aside className="sidebar w-72 sticky top-0 left-0 overflow-hidden bg-red-300 h-screen"></aside>
                        <section className="sidebar w-full bg-blue-300 h-screen">
                            <h1> Section Start from here...</h1>
                        </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
