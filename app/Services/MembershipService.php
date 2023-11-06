<?php

namespace App\Services;

use App\Repositories\MembershipRepository;

class MembershipService
{
    protected $memberShipRepository;
    public function __construct(MembershipRepository $memberShipRepository)
    {
        $this->memberShipRepository = $memberShipRepository;
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
}
