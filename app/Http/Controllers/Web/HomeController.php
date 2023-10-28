<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $image = [

            'hero_banner_1' => asset('web/img/hero/hero-1.jpg'),
            'hero_banner_2' => asset('web/img/hero/hero-2.jpg'),
            'class_3' => asset('web/img/classes/class-3.jpg'),
            'class_4' => asset('web/img/classes/class-4.jpg'),
            'class_5' => asset('web/img/classes/class-5.jpg'),
            'location' => asset('web/Icons/location.png'),
            'message' => asset('web/Icons/email.png'),
            'phone' => asset('web/Icons/cell-phone.png'),
        ];
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'image' => $image
        ]);
    }
}
