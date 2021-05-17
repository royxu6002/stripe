<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function skus()
    {
        return $this->belongsToMany(Sku::class)
            ->withPivot('quantity', 'price');
    }

    public function address()
    {
        return $this->belongsTo(InvoiceAddress::class);
    }

    protected $casts = [
        'plus_charges' => 'array',
    ];

    public function getPlusChargesAttribute($value)
    {
        return array_values(json_decode($value, true) ?: []);
    }

    public function setPlusChargesAttribute($value)
    {
        $this->attributes['plus_charges'] = json_encode(array_values($value));
    }
}
