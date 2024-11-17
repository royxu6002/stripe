<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Laravel\Cashier\Billable;
use App\Notifications\ResetPassword as ResetPasswordNotification;


class User extends Authenticatable
{
    use Notifiable, Billable, CanResetPassword;

    protected $guarded = [];

    protected $hidden = [
        'password', 
        'remember_token',
        'api_token',
        'stripe_id',
        'card_brand',
        'card_last_four',
        'trial_ends_at'
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }

    public function invoiceaddresses()
    {
        return $this->hasMany(InvoiceAddress::class);
    }

    public function consigneeaddresses()
    {
        return $this->hasMany(ConsigneeAddress::class);
    }

}
