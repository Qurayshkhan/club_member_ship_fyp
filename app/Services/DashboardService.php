<?php

namespace App\Services;

use App\Repositories\DashboardRepository;

class DashboardService
{

    protected $dashboardRepository;
    public function __construct(DashboardRepository $dashboardRepository)
    {
        $this->dashboardRepository = $dashboardRepository;
        // Constructor logic goes here
    }
    // Your repository logic goes here

    public function counts()
    {

        $userCount = $this->dashboardRepository->userCount();
        $userMemberShipCount = $this->dashboardRepository->membershipsCount();
        $gymClasses = $this->dashboardRepository->classesCount();
        $yearUserCount = $this->dashboardRepository->userChartCount();
        $yearMembershipCount =  $this->dashboardRepository->membershipChartCount();
        $memberAttendanceCount = $this->dashboardRepository->memberAttendanceCount();
        $memberAttendanceChartCount = $this->dashboardRepository->attendanceChartCount();
        $counts = [
            'user_count' => $userCount,
            'user_membership_count' => $userMemberShipCount,
            'gym_classes' => $gymClasses,
            'year_user_count' => $yearUserCount,
            'year_membership_count' => $yearMembershipCount,
            'member_attendance_count' => $memberAttendanceCount,
            'member_attendance_chart_count' => $memberAttendanceChartCount
        ];

        return $counts;
    }
}
