<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Membership;
use App\Models\User;
use App\Services\MembershipService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Stripe\Stripe;

class MemberController extends Controller
{
    protected $membershipService;
    public function __construct(MembershipService $membershipService)
    {
        $this->membershipService = $membershipService;
    }

    public function membershipPlans()
    {

        $memberships = $this->membershipService->membershipsService();
        return Inertia::render('Website/MembershipsPlans', ['memberships' => $memberships]);
    }

    public function subscriptionForm($membershipId)
    {
        if (Auth::check()) {
            $memberShipPlan = Membership::where('id', $membershipId)->first();
            return Inertia::render('Stripe/SubscriptionForm', ['membership_plan' => $memberShipPlan]);
        } else {
            return to_route('login');
        }
    }

    public function createPaymentIntent(Request $request)
    {
        // dd($request->all());
        // dd(auth()->user()->id);
        // 4242 4242 4242 4242

        try {
            DB::beginTransaction();
            $amount = $request->amount == 0 ? 0.50 * 100 : $request->input('amount') * 100;
            Stripe::setApiKey(config('services.stripe.secret'));

            $paymentIntent = \Stripe\PaymentIntent::create([
                'amount' => $amount,
                'currency' => 'usd',
            ]);
            $user = User::find(auth()->user()->id);
            $userSuccessMembership = $user->memberships()->sync($request->membership_id);
            $userSuccessMembership ? $this->membershipService->storeMemberFeeService($request) : null;
            DB::commit();
            return response()->json([
                'paymentIntent' => $paymentIntent,
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function processPayment(Request $request)
    {
        info($request->all());
    }
}
