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

    public function getImagesAttribute($value)
    {
        return array_values(json_decode($value, true) ?: []);
    }

    public function setImagesAttribute($value)
    {
        $this->attributes['images'] = json_encode(array_values($value));
    }

}
