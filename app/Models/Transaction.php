<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $guarded = [];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
    
    protected $casts = [
        'income' => 'array',
        'expenditure' => 'array',
    ];
    
    public function getIncomeAttribute($value)
    {
        return array_values(json_decode($value, true) ?: []);
    }

    public function setIncomeAttribute($value)
    {
        $this->attributes['income'] = json_encode(array_values($value));
    }

    public function getExpenditureAttribute($value)
    {
        return array_values(json_decode($value, true) ?: []);
    }

    public function setExpenditureAttribute($value)
    {
        $this->attributes['expenditure'] = json_encode(array_values($value));
    }
}
