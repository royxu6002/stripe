<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Order;
use Faker\Generator as Faker; 
use Illuminate\Support\Str;

$factory->define(Order::class, function (Faker $faker) {

    return [
        'user_id' => $faker->numberBetween(1, 10),
        'transaction_id' => Str::random(16),
        'total' => $faker->numberBetween(200000, 1000000),
    ];
});
