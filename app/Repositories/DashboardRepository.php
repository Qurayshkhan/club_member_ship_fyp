<?php

namespace App\Repositories;

use App\Models\GymClasses;
use App\Models\User;
use App\Models\UserMemberShips;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardRepository
{

    protected $user, $userMemberShips, $gymClasses;
    public function __construct(User $user, UserMemberShips $userMemberShips, GymClasses $gymClasses)
    {
        $this->user = $user;
        $this->userMemberShips = $userMemberShips;
        $this->gymClasses = $gymClasses;
        // Constructor logic goes here
    }

    public function userCount()
    {
        $count = $this->user->count();
        return $count;
    }

    public function membershipsCount()
    {
        $userMemberShips = $this->userMemberShips->count();
        return $userMemberShips;
    }
    public function classesCount()
    {
        $gymClasses = $this->gymClasses->count();
        return $gymClasses;
    }

    public function userChartCount()
    {
        $userYearlyCount = $this->user
            ->select(

                DB::raw("(COUNT(*)) as count"),
                DB::raw("YEAR(created_at) as year")
            )
            ->orderBy('created_at', 'ASC')
            ->groupBy('year')->get();

        return $userYearlyCount;
    }

    public function membershipChartCount()
    {
        $memberShipYearlyCount = $this->userMemberShips->select(
            DB::raw("(Count(*)) as count"),
            DB::raw("Year(created_at) as year")
        )
            ->orderBy('created_at', 'ASC')
            ->groupBy('year')
            ->get();

        return $memberShipYearlyCount;
    }
}
