<?php

use App\Http\Controllers\Admin\MembershipController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Web\HomeController;
use App\Http\Controllers\Web\MemberController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index'])->name('/');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::group(['prefix' => 'admin', 'middleware' => ['auth']], function () {

    // Users
    Route::get('/users', [UserController::class, 'index'])->name('users');

    //Memberships

    Route::get('/memberships', [MembershipController::class, 'memberShips'])->name('memberships');

    Route::post('/store-membership', [MembershipController::class, 'storeMemberShip'])->name('store.membership');

    Route::get('/edit-membership/{membership}', [MembershipController::class, 'editMemberShip'])->name('edit.membership');

    Route::delete('/delete-membership/{membership}', [MembershipController::class, 'deleteMemberShip'])->name('edit.membership');
});


Route::group(['prefix' => 'member'], function () {

    // Buy Subscription
    Route::get('/get-subscription-form/{membershipId}', [MemberController::class, 'subscriptionForm'])->name('member.subscription.form');

    Route::post('/create-payment-intent', [MemberController::class, 'createPaymentIntent'])->name('payment.intent');

    Route::post('/process-payment', [MemberController::class, 'processPayment'])->name('process.payment');
});
require __DIR__ . '/auth.php';
