<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\GymClasses;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GymClassesController extends Controller
{

    protected $gymClasses;
    public function __construct(GymClasses $gymClasses)
    {
        $this->gymClasses = $gymClasses;
    }

    public function index()
    {
        $gymClasses = $this->gymClasses->gymClassesService();
        return Inertia::render('Admin/Classes/GymClasses', ['gymClasses' => $gymClasses]);
    }

    public function assignClass(Request $request)
    {
        try {
            return $this->gymClasses->assignClassService($request);
        } catch (\Exception $exception) {
        }
    }
}
