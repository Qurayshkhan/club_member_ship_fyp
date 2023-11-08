<?php

namespace App\Repositories;

use App\Models\MembershipsFee;
use App\Models\User;

class AccountDetailRepository
{

    protected $membershipsFee, $user;
    public function __construct(MembershipsFee $membershipsFee, User $user)
    {
        $this->membershipsFee = $membershipsFee;
        $this->user = $user;
    }

    public function accountDetailsData()
    {
        $userId = auth()->user()->id;
        $user = $this->user->find($userId);
        $adminRole = $user->hasRole('admin');
        if ($adminRole) {
            return $this->membershipsFee->with('user')->get();
        } else {
            return $this->membershipsFee->with('user')->where('user_id', $userId)->get();
        }
    }
}
