<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class MembershipCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $userId = auth()->user()->id;
        $hasMemberShipExpiryDate =  null;
        $user = User::find($userId);
        $currentDate = Carbon::now();

        $hasMemberShip = $user->memberships()->where('user_id', $userId)->exists();

        if ($hasMemberShip) {
            $memberShipBuyingDate = $user->memberships()->first()->pivot->created_at;

            $memberShipDurationMonths = $user->memberships()->first()->duration;

            $hasMemberShipExpiryDate = $memberShipBuyingDate->addMonths($memberShipDurationMonths);
        }

        if (!$hasMemberShip) {

            return to_route('member.membership_plan');
        }

        if ($currentDate >= $hasMemberShipExpiryDate) {
            return to_route('member.membership_plan');
        }

        return $next($request);
    }
}
