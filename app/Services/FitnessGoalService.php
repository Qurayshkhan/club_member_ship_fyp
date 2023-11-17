<?php

namespace App\Services;

use App\Helpers\StatusCode;
use App\Repositories\FitnessGoalRepository;
use App\Traits\ApiTrait;

class FitnessGoalService
{
    use ApiTrait;
    protected $fitnessGoalRepository;

    public function __construct(FitnessGoalRepository $fitnessGoalRepository)
    {
        // Constructor logic goes here
        $this->fitnessGoalRepository = $fitnessGoalRepository;
    }

    // Your repository logic goes here

    public function setGoalService($request)
    {
        $data = [
            'user_id' => $request->member_id,
            'goal' => $request->goal,
            'initial_weight' => $request->initial_weight,
            'target_weight' => $request->target_weight,
            'start_date' => $request->start_date,
            'target_date' => $request->target_date,
        ];
        $goal = $this->fitnessGoalRepository->setMemberGoal($data);
        return $this->success($goal, "Set Goal Successfully", StatusCode::OK);
    }

    public function setGoalRoutineService($request)
    {

        $data = [
            'fitness_goal_id' => $request->fitness_goal_id,
            'title' => $request->title,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date
        ];

        $routine = $this->fitnessGoalRepository->storeSetRoutine($data);
        return $this->success($routine, "Routine Set Successfully", StatusCode::OK);
    }

    public function myFitnessRoutine()
    {
        return $this->fitnessGoalRepository->fitnessRoutine();
    }
}
