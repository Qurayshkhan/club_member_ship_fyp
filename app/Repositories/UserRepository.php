<?php

namespace App\Repositories;

use App\Models\User;
use App\Models\UserMemberShips;
use Carbon\Carbon;

class UserRepository
{
    protected $user, $userMemberShips;
    public function __construct(User $user, UserMemberShips $userMemberShips)
    {
        $this->user = $user;
        $this->userMemberShips = $userMemberShips;
    }

    public function users()
    {
        $userId = auth()->user()->id;
        return $this->user->with('memberships', 'gymClasses', 'fitnessGoal')->where('id', '!=', $userId)->get();
    }

    public function findUser($user)
    {
        return $this->user->find($user);
    }

    public function getUserEmails()
    {
        return $this->user->role('member')->get();
    }

    public function findUserInMemberShip()
    {

        $existsUser = $this->user->whereHas('membershipFee', function ($query) {
            $today = Carbon::now();
            $query->where('user_id', auth()->user()->id)->whereDate('membership_expiry', '>', $today);
        })->first();

        return $existsUser;
    }
}
