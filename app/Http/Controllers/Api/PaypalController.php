<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PaypalController extends Controller
{

  
    public function create(Request $request)
    {

        $user = User::firstOrCreate(
            [
                'email' => $request->input('email')
            ],
            [
                'password' => Hash::make(Str::random(12)),
                'name' => $request->input('name'),
                'address' => $request->input('address'),
                'city' => $request->input('city'),
                'state' => $request->input('state'),
                'zip_code' => $request->input('zip_code'),
                'country' => $request->input('country'),
            ]
        );

        try {
           $order = $user->orders()->create([
                'transaction_id' => $request->input('transaction_id'),
                'total' => $request->input('total'),
            ]);

            foreach(json_decode($request->input('cart'), true) as $item) {
                $order->products()->attach([
                    $item['id'],['quantity' => $iem['quantity']];
                ])
            }

            $order->load('products', 'user');

            return $order;

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()],500);
        }

        
    }



}
