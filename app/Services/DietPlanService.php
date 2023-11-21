<?php

namespace App\Services;

use App\Helpers\StatusCode;
use App\Traits\ApiTrait;

class DietPlanService
{
    use ApiTrait;
    protected $dietPlanApiService;
    public function __construct(DietPlanApiService $dietPlanApiService)
    {
        $this->dietPlanApiService = $dietPlanApiService;
    }

    public function calculateDietPlansService($request)
    {
        $endPoint = "macrocalculator";
        $data = [
            'goal' => $request->goal,
            'age' => $request->age,
            'gender' => $request->gender,
            'height' => $request->height,
            'weight' => $request->weight,
            'activitylevel' => $request->activitylevel
        ];

        $response = $this->dietPlanApiService->getRequest($endPoint, $data);
        return $response;
    }
}
