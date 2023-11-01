<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\MembershipService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MembershipController extends Controller
{
    protected $membershipService;
    public function __construct(MembershipService $membershipService)
    {
        $this->membershipService = $membershipService;
    }
    public function memberShips()
    {
        $membersShips = $this->membershipService->membershipsService();
        return Inertia::render('Admin/Memberships/MemberShips', [
            'memberShips' => $membersShips
        ]);
    }

    public function storeMemberShip(Request $request)
    {
        try {
            return $this->membershipService->storeMembershipService($request);
        } catch (\Exception $exception) {
        }
    }
}
