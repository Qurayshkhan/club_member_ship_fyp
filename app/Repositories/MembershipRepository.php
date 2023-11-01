<?php

namespace App\Repositories;


use App\Helpers\StatusCode;
use App\Models\Membership;
use App\Traits\ApiTrait;

class MembershipRepository
{
    use ApiTrait;

    protected $membership;
    public function __construct(Membership $membership)
    {
        $this->membership = $membership;
    }

    public function memberships()
    {
        return $this->membership->all();
    }

    public function store($data)
    {
        $this->membership->updateOrCreate(['id' => $data['id']], $data);
        $membership = $this->memberships();
        return $this->success($membership, "Success", StatusCode::OK);
    }
}
