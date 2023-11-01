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
            'duration' => $request->duration
        ];

        return $this->memberShipRepository->store($data);
    }
}
