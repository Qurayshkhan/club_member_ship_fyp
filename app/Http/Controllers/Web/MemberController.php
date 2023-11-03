<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Membership;
use App\Models\User;
use App\Services\MembershipService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Stripe\Stripe;

class MemberController extends Controller
{
    protected $membershipService;
    public function __construct(MembershipService $membershipService)
    {
        $this->membershipService = $membershipService;
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
        // 4242 4242 4242 4242

        try {
            Stripe::setApiKey(config('services.stripe.secret'));

            $paymentIntent = \Stripe\PaymentIntent::create([
                'amount' => $request->input('amount') * 100,
                'currency' => 'usd',
            ]);
            $user = User::find(auth()->user()->id);
            $user->memberships()->attach($request->membership_id);
            return response()->json([
                'paymentIntent' => $paymentIntent,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500); // Return a 500 Internal Server Error in case of an exception
        }
    }

    public function processPayment(Request $request)
    {
        // Handle payment processing and confirmation
        info($request->all());
    }
}
