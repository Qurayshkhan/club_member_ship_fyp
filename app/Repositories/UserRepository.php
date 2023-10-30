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
        return $this->user->where('id', '!=', $userId)->get();
    }
}
