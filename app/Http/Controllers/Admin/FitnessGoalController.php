<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\FitnessGoalService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FitnessGoalController extends Controller
{
    protected $fitnessGoalService;
    public function __construct(FitnessGoalService $fitnessGoalService)
    {
        $this->fitnessGoalService = $fitnessGoalService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            return $this->fitnessGoalService->setGoalService($request);
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function setRoutine(Request $request)
    {
        try {
            return $this->fitnessGoalService->setGoalRoutineService($request);
        } catch (\Exception $exception) {
            info($exception->getMessage());
        }
    }

    public function myRoutine()
    {
        $goals = $this->fitnessGoalService->myFitnessRoutine();
        return Inertia::render('Website/MyRoutine/MyRoutine', ['goals' => $goals]);
    }
}
