<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function memberships()
    {
        return $this->belongsToMany(Membership::class, 'user_member_ships', 'user_id', 'membership_id')->withTimestamps();
    }

    public function gymClasses()
    {
        return $this->belongsToMany(GymClasses::class, 'user_gym_classes', 'user_id', 'gym_classes_id')->withTimestamps();
    }

    public function membershipFee()
    {
        return $this->hasMany(MembershipsFee::class);
    }

    public function userAttendances()
    {
        return $this->hasMany(UserAttendance::class);
    }

    public function fitnessGoal()
    {
        return $this->hasMany(FitnessGoal::class);
    }
}
