<?php

namespace App\Http\Controllers;

use App\Helpers\StatusCode;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use App\Models\UserAttendance;
use App\Traits\ApiTrait;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    use ApiTrait;
    protected $userAttendance, $user;
    public function __construct(User $user, UserAttendance $userAttendance)
    {
        $this->userAttendance = $userAttendance;
        $this->user = $user;
    }
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $user = $request->user();
        $userQRCodePath = asset('storage/' . $user->qr_image);
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'userQRCodePath' => $userQRCodePath,
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function qrScanner()
    {
        return Inertia::render('Profile/Partials/ScanQR');
    }

    public function scanAttendance(Request $request)
    {
        $todayDate = Carbon::now()->today();
        $user = $this->user->where('id', auth()->user()->id)->where('email', $request->email)->first();

        $notCheckOut = $this->userAttendance->where('user_id', auth()->user()->id)->whereNotNull('check_in')->whereNull('check_out')->first();

        $checkOut = $notCheckOut ? $todayDate : null;

        $currentTime = Carbon::now('Asia/Karachi')->format('H:i:s');

        $checkOutTime = $notCheckOut ? $currentTime : null;

        if ($user) {

            $this->userAttendance->updateOrCreate(
                ['check_in' => $todayDate],
                [
                    'user_id' => $user->id,
                    'check_in' => $todayDate,
                    'check_out' => $checkOut,
                    'check_in_time' => $currentTime,
                    'check_out_time' => $checkOutTime,
                    'status' => 'regular',
                ],

            );
        }

        $message = $notCheckOut ? "You checkout successfully" : "You check in Successfully";
        return $this->success($user, $message, StatusCode::OK);
    }
}
