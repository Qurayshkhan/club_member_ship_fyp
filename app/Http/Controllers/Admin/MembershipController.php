<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MembershipRequest;
use App\Services\MembershipService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MembershipController extends Controller
{
    protected $membershipService;
    public function __construct(MembershipService $membershipService)
    {
        $this->membershipService = $membershipService;
        $this->middleware(['permission:can_view_memberships']);
    }
    public function memberShips()
    {
        $membersShips = $this->membershipService->membershipsService();
        return Inertia::render('Admin/Memberships/MemberShips', [
            'memberShips' => $membersShips
        ]);
    }

    public function storeMemberShip(MembershipRequest $request)
    {
        try {
            return $this->membershipService->storeMembershipService($request);
        } catch (\Exception $exception) {
            info($exception->getMessage());
        }
    }

    public function editMemberShip($membership)
    {
        try {
            return $this->membershipService->editMemberShipService($membership);
        } catch (\Exception $exception) {
            info($exception->getMessage());
        }
    }

    public function deleteMemberShip($membership)
    {
        try {
            return $this->membershipService->deleteMemberShipService($membership);
        } catch (\Exception $e) {
            info($e->getMessage());
        }
    }
}
