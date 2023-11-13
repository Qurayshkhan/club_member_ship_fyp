import BarChart from '@/Components/Charts/BarChart';
import LineChart from '@/Components/Charts/LineChart';
import CountCard from '@/Components/Wesite/CountCard';
import React from 'react'

function AdminAnalytics({ counts, userData, membershipData }) {
    return (
        <div>
            <div className="flex justify-between gap-2">
                <div className="w-full">
                    <CountCard title="Users" count={counts.user_count} backgroundColor="#f36100" textColor="white" />
                </div>
                <div className="w-full">
                    <CountCard title="Memberships" count={counts.user_membership_count} backgroundColor="#104D5A" textColor="white" />
                </div>
                <div className="w-full">
                    <CountCard title="Classes" count={counts.gym_classes} backgroundColor="#C3385D" textColor="white" />
                </div>
            </div>
            <div className="w-full">
                <div className="p-10">
                    <h1 className="text-lg font-[700]">Total Users</h1>
                    <BarChart chartData={userData} />
                </div>
                <div className="p-10">
                    <h1 className="text-lg font-[700]">Total Memberships</h1>
                    <LineChart chartData={membershipData} />
                </div>
            </div>
        </div>
    )
}

export default AdminAnalytics;
