import BarChart from '@/Components/Charts/BarChart';
import LineChart from '@/Components/Charts/LineChart';
import CountCard from '@/Components/Wesite/CountCard'
import React from 'react'

function MemberAnalytics({ counts, attendanceChartCount, membershipData }) {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let currentMonth = new Date(year, month, 0).getDate();
    return (
        <div>
            <div className="flex justify-between gap-2">
                <div className="w-full">
                    <CountCard title="Attendances" count={`${counts.member_attendance_count}/${currentMonth}`} backgroundColor="#f36100" textColor="white" />
                </div>
                {/* <div className="w-full">
                    <CountCard title="Memberships" count={counts.user_membership_count} backgroundColor="#104D5A" textColor="white" />
                </div>
                <div className="w-full">
                    <CountCard title="Classes" count={counts.gym_classes} backgroundColor="#C3385D" textColor="white" />
                </div> */}
            </div>
            <div className="w-full">
                <div className="p-10">
                    <h1 className="text-lg font-[700]">Each Day Attendance</h1>
                    <LineChart chartData={attendanceChartCount} />
                </div>
            </div>
        </div>
    )
}

export default MemberAnalytics
