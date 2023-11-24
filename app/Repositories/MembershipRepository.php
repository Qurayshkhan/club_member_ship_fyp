<?php

namespace App\Repositories;


use App\Helpers\StatusCode;
use App\Models\Membership;
use App\Models\MembershipsFee;
use App\Traits\ApiTrait;

class MembershipRepository
{
    use ApiTrait;

    protected $membership, $membershipFee;
    public function __construct(Membership $membership, MembershipsFee $membershipFee)
    {
        $this->membership = $membership;
        $this->membershipFee = $membershipFee;
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

    public function storeMemberFeeDetails($data)
    {
        return $this->membershipFee->create($data);
    }

    public function findMembership($membershipId)
    {
        return $this->membership->find($membershipId);
    }
}
