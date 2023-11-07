<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\GymClasses;
use App\Services\UserService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    protected $userService, $gymClasses;
    public function __construct(UserService $userService, GymClasses $gymClasses)
    {
        $this->userService = $userService;
        $this->gymClasses = $gymClasses;
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
