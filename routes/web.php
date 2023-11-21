<?php

use App\Http\Controllers\Admin\AccountDetailsController;
use App\Http\Controllers\Admin\AnnouncementController;
use App\Http\Controllers\Admin\AttendanceController;
use App\Http\Controllers\Admin\DietPlanController;
use App\Http\Controllers\Admin\FitnessGoalController;
use App\Http\Controllers\Admin\MembershipController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\GymClassesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Web\HomeController;
use App\Http\Controllers\Web\MemberController;
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



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/scan-qr-code', [ProfileController::class, 'qrScanner'])->name('profile.qr_scanner');
    Route::post('/scan-attendance', [ProfileController::class, 'scanAttendance'])->name('profile.scan_attendance');
});


Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'membershipcheck', 'verified']], function () {


    // dashboard

    Route::get('/dashboard', [HomeController::class, 'dashboard'])->name('dashboard');

    // Users
    Route::get('/users', [UserController::class, 'index'])->name('users');

    //Memberships

    Route::get('/memberships', [MembershipController::class, 'memberShips'])->name('memberships');

    Route::post('/store-membership', [MembershipController::class, 'storeMemberShip'])->name('store.membership');

    Route::get('/edit-membership/{membership}', [MembershipController::class, 'editMemberShip'])->name('edit.membership');

    Route::delete('/delete-membership/{membership}', [MembershipController::class, 'deleteMemberShip'])->name('edit.membership');

    // gym classes
    Route::get('/gym-classes', [GymClassesController::class, 'index'])->name('admin.gym_classes');

    Route::post('/assign-class-to-member', [GymClassesController::class, 'assignClass'])->name('admin.assign_gym_class');

    Route::get('/members-account-details', [AccountDetailsController::class, 'accountDetailsRecords'])->name('admin.account_details');

    Route::get('/member-attendances', [AttendanceController::class, 'attendances'])->name('admin.member_attendances');

    Route::resource('fitness-goals', FitnessGoalController::class);
    Route::post('/set-goal-fitness-routine', [FitnessGoalController::class, 'setRoutine'])->name('admin.set_goal_fitness_routine');

    Route::get('/announcements', [AnnouncementController::class, 'createAnnouncements'])->name('admin.announcements');

    Route::post('/send-announcements', [AnnouncementController::class, 'sendAnnouncements'])->name('admin.send-announcements');
});


Route::group(['prefix' => 'member'], function () {

    // Buy Subscription
    Route::get('/get-subscription-form/{membershipId}', [MemberController::class, 'subscriptionForm'])->name('member.subscription.form');

    Route::post('/create-payment-intent', [MemberController::class, 'createPaymentIntent'])->name('payment.intent');

    Route::post('/process-payment', [MemberController::class, 'processPayment'])->name('process.payment');

    Route::get('/membership-plan-pricing', [MemberController::class, 'membershipPlans'])->name('member.membership_plan');

    Route::get('/my-routine', [FitnessGoalController::class, 'myRoutine'])->name('member.my_routine');

    Route::get('/diet-plan', [DietPlanController::class, 'dietPlan'])->name('member.dietPlan');

    Route::post('/calculate-diet-plan', [DietPlanController::class, 'calculateDietPlans'])->name('member.calculate_diet_plans');
});

// Route::get('/get-months', function () {
//     $user = User::find(auth()->user()->id);
//     $userMemberShip = $user->memberShips()->first();

//     dd($userMemberShip->created_at, $userMemberShip->created_at->addMonths(2));
// });


require __DIR__ . '/auth.php';
