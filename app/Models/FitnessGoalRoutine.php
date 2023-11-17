<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FitnessGoalRoutine extends Model
{
    use HasFactory;

    protected $fillable = ['fitness_goal_id', 'title', 'start_date', 'end_date'];

    public function fitnessGoal()
    {
        return $this->hasOne(FitnessGoal::class);
    }
}
