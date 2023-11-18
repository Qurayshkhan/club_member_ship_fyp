<?php

namespace App\Repositories;

use App\Models\FitnessGoal;
use App\Models\FitnessGoalRoutine;
use App\Models\User;

class FitnessGoalRepository
{
    protected $fitnessGoal, $fitnessGoalRoutine, $user;
    public function __construct(User $user, FitnessGoal $fitnessGoal, FitnessGoalRoutine $fitnessGoalRoutine)
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

    public function fitnessRoutine($userId)
    {
        $user =  $userId ? $userId : auth()->user()->id;
        $goal = $this->fitnessGoal->where('user_id', $user)->with('fitnessRoutine')->get();
        return $goal;
    }
}
