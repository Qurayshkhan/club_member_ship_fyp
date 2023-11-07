<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GymClasses extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'fee', 'class_time'];


    public function users()
    {
        return $this->belongsToMany(User::class, 'user_member_ships', 'membership_id', 'user_id');
    }
}
