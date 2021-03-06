<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InvoiceAddress extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
