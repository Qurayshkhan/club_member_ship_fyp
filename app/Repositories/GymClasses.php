<?php

namespace App\Repositories;

use App\Models\GymClasses as ModelsGymClasses;
use App\Models\User;
use App\Traits\ApiTrait;

class GymClasses
{

    use ApiTrait;
    protected $gymClasses, $user, $userRepository;
    public function __construct(ModelsGymClasses $gymClasses, User $user, UserRepository $userRepository)
    {
        // Constructor logic goes here
        $this->gymClasses = $gymClasses;
        $this->user = $user;
        $this->userRepository = $userRepository;
    }

    public function gymCLasses()
    {
        return $this->gymClasses->all();
    }

    public function storeUserGymClass($data)
    {
        $memberId = $data['member_id'];
        $gymClassId = $data['class_id'];
        $member = $this->user->find($memberId);
        $member->gymClasses()->attach($gymClassId);
        $memberDetails = $this->userRepository->users();
        return $this->success($memberDetails, "Course Assign to member successfully", 200);
    }
}
