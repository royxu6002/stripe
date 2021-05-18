<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sku extends Model
{
    protected $guarded = [];

    public $timestamps = false;

    protected $casts = [
        'image' => 'array'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class);
    }

    // public function getImageAttribute($pictures)
    // {
    //     return json_decode($pictures, true);
    //     // return array_values(json_decode($value, true) ?: []);
    // }

    // public function setImageAttribute($pictures)
    // {
    //     if(is_array($pictures)) {
    //         $this->attributes['image'] = json_encode($pictures);
    //     }

    //     // $this->attributes['image'] = json_encode(array_values($value));
    // }
}
