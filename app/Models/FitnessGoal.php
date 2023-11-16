<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FitnessGoal extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'goal', 'initial_weight', 'target_weight', 'start_date', 'target_date'];
}
