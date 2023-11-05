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

        $user = User::find($userId);

        $memberShipBuyingDate = $user->memberships()->first()->pivot->created_at;

        $hasMemberShip = $user->memberships()->where('user_id', $userId)->exists();

        $memberShipDurationMonths = $user->memberships()->first()->duration;

        $hasMemberShipExpiryDate = $memberShipBuyingDate->addMonths($memberShipDurationMonths);

        $currentDate = Carbon::now();

        if (!$hasMemberShip &&  $currentDate >= $hasMemberShipExpiryDate) {

            return to_route('member.membership_plan');
        }

        return $next($request);
    }
}
