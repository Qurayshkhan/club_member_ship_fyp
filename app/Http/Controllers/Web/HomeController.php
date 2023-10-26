<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $images = [
            'logo' => asset('web/img/logo.png'),
            'data_set_bg_one' => asset('web/img/hero/hero-1.jpg'),
            'data_set_bg_two' => asset('web/img/hero/hero-2.jpg'),
            'class_1' => asset('web/img/classes/class-1.jpg'),
            'class_2' => asset('web/img/classes/class-2.jpg'),
            'class_3' => asset('web/img/classes/class-3.jpg'),
            'class_4' => asset('web/img/classes/class-4.jpg'),
            'class_5' => asset('web/img/classes/class-5.jpg'),
        ];
        return Inertia::render('Website/Master', [
            'images' => $images,
        ]);
    }
}
