<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    use HasFactory;
    protected $fillable = [
        "id",
        "name",
        "price",
        "member_ship_type",
        "description",
        "duration"
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_member_ships', 'membership_id', 'user_id');
    }
}
