<?php

namespace App\Services;

use App\Repositories\MembershipRepository;
use App\Repositories\UserRepository;
use Carbon\Carbon;

class MembershipService
{
    protected $memberShipRepository, $userRepository;
    public function __construct(MembershipRepository $memberShipRepository, UserRepository $userRepository)
    {
        $this->memberShipRepository = $memberShipRepository;
        $this->userRepository = $userRepository;
    }

    public function membershipsService()
    {
        return $this->memberShipRepository->memberships();
    }

    public function storeMembershipService($request)
    {
        $data = [
            'id' => $request->id,
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'member_ship_type' => $request->member_ship_type,
            'duration' => $request->duration
        ];

        return $this->memberShipRepository->store($data);
    }
    public function editMemberShipService($membership)
    {
        return $this->memberShipRepository->edit($membership);
    }
    public function deleteMemberShipService($membership)
    {
        return $this->memberShipRepository->delete($membership);
    }

    public function storeMemberFeeService($request)
    {
        $getMembership = $this->memberShipRepository->findMembership($request->membership_id);
        $membershipExpiry = Carbon::now()->addMonths($getMembership->duration);
        $data = [
            'user_id' => auth()->user()->id,
            'membership_level' => $request->membership_level,
            'amount' => $request->amount,
            "discount" => $request->discount ?? 0.00,
            "payment_date" => $request->payment_date ?? Carbon::now(),
            'membership_expiry' =>  $membershipExpiry
        ];
        return $this->memberShipRepository->storeMemberFeeDetails($data);
    }

    public function getExistingUserInMembershipService()
    {
        return $this->userRepository->findUserInMemberShip();
    }

    public function findMembershipService($membershipId)
    {

        return $this->memberShipRepository->findMembership($membershipId);
    }
}
