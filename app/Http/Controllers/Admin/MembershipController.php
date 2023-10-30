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
        return Inertia::render('Admin/Memberships/MemberShips');
    }
}
