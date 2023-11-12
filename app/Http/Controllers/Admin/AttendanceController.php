<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\UserAttendance;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AttendanceController extends Controller
{
    protected $userAttendance;
    public function __construct(UserAttendance $userAttendance)
    {
        $this->userAttendance = $userAttendance;
    }

    public function attendances()
    {
        $attendances = $this->userAttendance->with('user')->get();

        return Inertia::render('Admin/Attendance/Attendance', ['attendances' => $attendances]);
    }
}
