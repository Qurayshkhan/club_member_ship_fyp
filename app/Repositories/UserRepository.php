<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    protected $user;
    public function __construct(User $user)
    {
        $this->user = $user;
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
}
