<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Category;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Category::class, function (Faker $faker) {
    
    $name = $faker->jobTitle;
    $nameArr = explode(' ', $name);
    $name = trim($nameArr[0]);

    return [
        'name' => $name,
        'slug' => Str::slug($name),
    ];
});
