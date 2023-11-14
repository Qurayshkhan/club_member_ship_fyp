import ContentSection from "@/Components/Admin/ContentSection";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";
import AdminAnalytics from "./Admin/Analytics/AdminAnalytics";
import MemberAnalytics from "./Admin/Analytics/MemberAnalytics";

let Dashboard = (props) => {
    let user = props.auth.user;

    const permissions = user.roles.reduce((acc, role) => {
        return acc.concat(role.permissions);
    }, []);

    const [userPermissions, setUserPermissions] = useState(permissions);

    const hasAnyPermission = (permissionNames) => {
        return permissionNames.some((permissionName) =>
            userPermissions.some((permission) => permission.name === permissionName)
        );
    };


    const { counts } = usePage().props;

    const { year_user_count, year_membership_count, member_attendance_chart_count } = counts;

    const [userData, setUserData] = useState({
        labels: year_user_count.map((data) => data.year),
        datasets: [{
            label: "Total users",
            data: year_user_count.map((data) => data.count),
            backgroundColor: ["#f36100", "#C3385D", "#104D5A"]
        }]
    });

    const [membershipData, setMembershipData] = useState({
        labels: year_membership_count.map((data) => data.year),
        datasets: [{
            label: "Total Memberships",
            data: year_membership_count.map((data) => data.count),
        }]
    });

    const [attendanceChartCount, setAttendanceChartCount] = useState({
        labels: member_attendance_chart_count.map((data) => data.date),
        datasets: [{
            label: "Each Day Attendance",
            data: member_attendance_chart_count.map((data) => data.count),
        }]
    })
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />
            <ContentSection heading="Analytics">
                {hasAnyPermission(["can_view_admin_analytics"]) && (
                    <AdminAnalytics counts={counts} userData={userData} membershipData={membershipData} />
                )}
                {hasAnyPermission(["can_view_member_analytics"]) && (
                    <MemberAnalytics counts={counts} attendanceChartCount={attendanceChartCount} membershipData={membershipData} />
                )}
            </ContentSection>
        </AuthenticatedLayout>
    );
};
export default Dashboard;
