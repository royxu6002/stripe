<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = [];

    public function getRouteKeyName() 
    {
        return 'slug';
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
    
    protected $casts = [
        'images' => 'array'
    ];

    public function skus()
    {
        return $this->hasMany(Sku::class);
    }
}
