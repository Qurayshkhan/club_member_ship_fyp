import ContentSection from "@/Components/Admin/ContentSection";
import SideBar from "@/Components/Admin/Sidebar";
import Users from "@/Components/Admin/Users/Users";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

let Dashboard = (props) => {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />
            <ContentSection heading="Stats">
                {/* <Users /> */}
                Stats
            </ContentSection>
        </AuthenticatedLayout>
    );
};
export default Dashboard;
