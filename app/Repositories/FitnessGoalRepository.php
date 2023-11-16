<?php

namespace App\Repositories;

use App\Models\FitnessGoal;

class FitnessGoalRepository
{
    protected $fitnessGoal;
    public function __construct(FitnessGoal $fitnessGoal)
    {
        // Constructor logic goes here
        $this->fitnessGoal = $fitnessGoal;
    }

    // Your repository logic goes here

    public function setMemberGoal($data)
    {
        return  $this->fitnessGoal->create($data);
    }
}
