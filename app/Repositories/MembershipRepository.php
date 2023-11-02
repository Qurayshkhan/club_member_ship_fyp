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
        $message =  $data['id'] ? 'Member ship update successfully' : 'Member ship store successfully';
        $this->membership->updateOrCreate(['id' => $data['id']], $data);
        $membership = $this->memberships();
        return $this->success($membership, $message, StatusCode::OK);
    }

    public function edit($membership)
    {
        $editMemberShip = $this->membership->find($membership);
        return $this->success($editMemberShip, "Success", StatusCode::OK);
    }

    public function delete($membership)
    {
        $deleteMemberShip = $this->membership->find($membership);

        $deleteMemberShip->delete();

        $membership = $this->memberships();
        return $this->success($membership, "Delete Membership Successfully", StatusCode::OK);
    }
}
