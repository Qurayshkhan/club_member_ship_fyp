<?php

namespace App\Services;

use App\Repositories\GymClasses as RepositoriesGymClasses;

class GymClasses
{
    protected $repositoriesGymClasses;
    public function __construct(RepositoriesGymClasses $repositoriesGymClasses)
    {
        $this->repositoriesGymClasses = $repositoriesGymClasses;
    }

    public function gymClassesService()
    {
        return $this->repositoriesGymClasses->gymCLasses();
    }

    public function assignClassService($request)
    {
        $data = [
            "member_id" => $request->member_id,
            "class_id" => $request->gym_class_id,
        ];
        return  $this->repositoriesGymClasses->storeUserGymClass($data);
    }
}
