<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;
use App\Http\Resources\UserResource;

use PayPal\Api\Payer;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Details;
use PayPal\Api\Amount;
use PayPal\Api\Transaction;
use PayPal\Api\RedirectUrls;
use PayPal\Api\Payment;
use PayPal\Exception\PayPalConnectionException;
use PayPal\Api\PaymentExecution;
use PayPal\Api\ShippingAddress;
use Validator;
use DB;

class UserController extends Controller
{
    // stripe 付款
    public function stripe(Request $request)
    {
        $user = User::firstOrCreate(
            [
                'email' => $request->input('email')
            ],
            [
                'password' => Hash::make(Str::random(12)),
                'name' => $request->input('first_name').' '.$request->input('last_name'),
                'phone' => $request->input('phone'),
                'address' => $request->input('address'),
                'city' => $request->input('city'),
                'state' => $request->input('state'),
                'zip_code' => $request->input('zip_code'),
                'country' => $request->input('country'),
            ]
        );


        try {
            $user->createOrGetStripeCustomer();

            $payment = $user->charge(
                $request->input('amount'),
                $request->input('payment_method_id')
            );

            $payment = $payment->asStripePaymentIntent();

            $order = $user->orders()
                ->create([
                    'transaction_id' => $payment->charges->data[0]->id,
                    'total' => $payment->charges->data[0]->amount,
                    'payment_method' => 'stripe',
                    'status' => 'paid',
                ]);
            
            foreach(json_decode($request->input('cart'), true) as $item) {
                $order->products()
                    ->attach($item['id'], ['quantity' => $item['quantity']]);
            }

            $order->load('products', 'user.addresses');

            return $order;
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function bank(Request $request, User $user)
    {
    
        DB::beginTransaction();
        try {
                      
            $order = $user->orders()
                ->create([
                    'transaction_id' => 'BankT'.Str::random(10),
                    'total' => $request->input('amount'),
                    'payment_method' => $request->input('paymentMethod'),
                    'status' => 'unpaid',
                    'invoice_address_id' => $request->input('iav')??null,
                    'consignee_address_id' => $request->input('cav')??null,
                ]);

            foreach(json_decode($request->input('cart'), true) as $item) {
                $order->products()->attach($item['id'], [
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                ]);
            }
            
            DB::commit();
            
            return $order->load('products');
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function index()
    {
        return UserResource::collection(User::paginate(2));
    }

    public function paypal(Request $request)
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
                'payment_method' => 'paypal',
                'status' => 'paid',
            ]);

            foreach($request->input('purchase_units')[0]['items'] as $item) {
                $order->products()->attach($item['sku'],['quantity' => $item['quantity']]);
            }

            $order->load('products');

            return $order;

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()],500);
        }
        
    }
}
