<?php

namespace App\Repositories;

use App\Models\FitnessGoal;
use App\Models\FitnessGoalRoutine;

class FitnessGoalRepository
{
    protected $fitnessGoal, $fitnessGoalRoutine;
    public function __construct(FitnessGoal $fitnessGoal, FitnessGoalRoutine $fitnessGoalRoutine)
    {
        // Constructor logic goes here
        $this->fitnessGoal = $fitnessGoal;
        $this->fitnessGoalRoutine = $fitnessGoalRoutine;
    }

    // Your repository logic goes here

    public function setMemberGoal($data)
    {
        return  $this->fitnessGoal->create($data);
    }

    public function storeSetRoutine($data)
    {
        return $this->fitnessGoalRoutine->create($data);
    }

    public function fitnessRoutine()
    {
        $userId = auth()->user()->id;
        $goal = $this->fitnessGoal->where('user_id', $userId)->with('fitnessRoutine')->first();
        return $goal;
    }
}
