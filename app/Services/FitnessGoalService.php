<?php

namespace App\Services;

use App\Helpers\StatusCode;
use App\Jobs\SendNotification;
use App\Repositories\FitnessGoalRepository;
use App\Repositories\UserRepository;
use App\Traits\ApiTrait;
use App\Services\NotificationService;

class FitnessGoalService
{
    use ApiTrait;
    protected $fitnessGoalRepository, $userRepository, $notificationService;

    public function __construct(FitnessGoalRepository $fitnessGoalRepository, UserRepository $userRepository, NotificationService $notificationService)
    {
        // Constructor logic goes here
        $this->fitnessGoalRepository = $fitnessGoalRepository;
        $this->userRepository = $userRepository;
        $this->notificationService = $notificationService;
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
        $user = $this->userRepository->findUser($request->member_id);
        $user ? SendNotification::dispatch($user, $data) : '';
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

    public function myFitnessRoutine($request)
    {
        $userId = $request->user_id;
        return $this->fitnessGoalRepository->fitnessRoutine($userId);
    }
}
