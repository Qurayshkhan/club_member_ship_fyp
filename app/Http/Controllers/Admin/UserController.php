<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\FitnessGoalService;
use App\Services\GymClasses;
use App\Services\UserService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    protected $userService, $gymClasses, $fitnessGoalService;
    public function __construct(UserService $userService, GymClasses $gymClasses, FitnessGoalService $fitnessGoalService)
    {
        $this->userService = $userService;
        $this->gymClasses = $gymClasses;
        $this->fitnessGoalService = $fitnessGoalService;
    }
    public function index()
    {
        $users = $this->userService->users();
        $gymClasses = $this->gymClasses->gymClassesService();
        return Inertia::render('Admin/Users/Users', [
            'users' => $users,
            'gym_classes' => $gymClasses,
        ]);
    }
}
