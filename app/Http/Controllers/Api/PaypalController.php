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
                'email' => $request->input('payer')['email_address'],
            ],
            [
                'password' => Hash::make(Str::random(12)),
                'name' => $request->input('payer')['name']['given_name'] .' '.$request->input('payer')['name']['surname'],
                'address' => $request->input('purchase_units')[0]['shipping']['address']['address_line_1'],
                'city' => $request->input('purchase_units')[0]['shipping']['address']['admin_area_2'],
                'state' => $request->input('purchase_units')[0]['shipping']['address']['admin_area_1'],
                'zip_code' => $request->input('purchase_units')[0]['shipping']['address']['postal_code'],
                'country' => $request->input('purchase_units')[0]['shipping']['address']['country_code'],
            ]
        );

        try {
           $order = $user->orders()->create([
                'transaction_id' => $request->input('purchase_units')[0]['payments']['captures'][0]['id'],
                'total' => $request->input('purchase_units')[0]['amount']['value']*100,
            ]);

            foreach($request->input('purchase_units')[0]['items'] as $item) {
                $order->products()->attach($item['sku'],['quantity' => $item['quantity']]);
            }

            $order->load('products', 'user');

            return $order;

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()],500);
        }

        
    }



}
