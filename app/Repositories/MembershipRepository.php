<?php

namespace App\Repositories;

use App\Models\Membership;

class MembershipRepository
{

    protected $membership;
    public function __construct(Membership $membership)
    {
        $this->membership = $membership;
    }

    // Your repository logic goes here
}
