<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\DietPlanService;
use App\Traits\ApiTrait;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DietPlanController extends Controller
{
    use ApiTrait;
    protected $dietPlanService;
    public function __construct(DietPlanService $dietPlanService)
    {
        $this->dietPlanService = $dietPlanService;
    }

    public function dietPlan()
    {
        return Inertia::render('Website/DietPlans/DietPlans');
    }

    public function calculateDietPlans(Request $request)
    {
        // dd($request->all());
        try {
            return $this->dietPlanService->calculateDietPlansService($request);
        } catch (\Exception $exception) {
        }
    }
}
