<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;

$factory->define(Product::class, function (Faker $faker) {
    
    $products = ['Sweater', 'Pants', 'Shirt', 'Hat', 'Glasses', 'Socks'];
    $name = $faker->company.' '. Arr::random($products);

    return [
        'name' => $name,
        'slug' => Str::slug($name),
        'description' => $faker->realText(320),
        'price' => $faker->numberBetween(10000, 100000),
    ];
});
