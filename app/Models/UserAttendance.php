<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAttendance extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'check_in', 'check_out', 'check_in_time', 'check_out_time', 'status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
