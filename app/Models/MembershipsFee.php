<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MembershipsFee extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'membership_level', 'amount', 'discount', 'payment_date'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // public function setPaymentDateAttribute()
    // {
    //     return date('D/M/Y', strtotime($this->attributes['payment_date']));
    // }
    public function getPaymentDateAttribute()
    {
        return date('d-M-Y', strtotime($this->attributes['payment_date']));
    }
}
