<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\InvoiceAddress;
use Validator;
use Exception;

class InvoiceAddController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function create(Request $request, User $user)
    {
    
        $validator = $this->validateAddress($request->all());

        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ]);
        }

        $invoice_add = $user->invoiceaddresses()->create([
            'name' => $request->input('first_name'). ' '.$request->input('last_name'),
            'company_name' => $request->input('company_name') ?? null,
            'phone' =>  $request->input('phone'),
            'address' => $request->input('address'),
            'city' => $request->input('city'),
            'state' => $request->input('state'),
            'zip_code' => $request->input('zip_code'),
            'country' => $request->input('country')
        ]);

        return response()->json([
            'msg' => 'address for invoice has been created',
            'address' =>  $invoice_add
        ]);
    }

    public function validateAddress(array $data)
    {
        return Validator::make($data, [
            'first_name' => ['required', 'min:2'],
            'last_name'  => ['required', 'min:2'],
            'phone'      => ['required'],
            'address'    => ['required'],
            'city'       => ['required'],
            'state'      => ['required'],
            'zip_code'   => ['required'],
            'country'    => ['required'],
        ]);
    }

    public function show(User $user, InvoiceAddress $address)
    {
        return $address->toArray();
    }

    public function update(Request $request, User $user, InvoiceAddress $address)
    {
        $validator = $this->validateAddress($request->all());

        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ]);
        }

        $invoice_add = $user->invoiceaddresses()->update([
            'name' => $request->input('first_name'). ' '.$request->input('last_name'),
            'company_name' => $request->input('company_name') ?? null,
            'phone' =>  $request->input('phone'),
            'address' => $request->input('address'),
            'city' => $request->input('city'),
            'state' => $request->input('state'),
            'zip_code' => $request->input('zip_code'),
            'country' => $request->input('country')
        ]);

        $updated_address = InvoiceAddress::find($address);

        return response()->json([
            'msg' => 'address for invoice has been updated',
            'address' => $updated_address[0],
            // 'address' => InvoiceAddress::where('id', $address->id)->get()s
        ]);
    }

    public function destroy(User $user, InvoiceAddress $invoiceadd)
    {
        $result =  $user->invoiceaddresses()->delete($invoiceadd);

        if($result) {
            return response()->json([
                'msg' => 'address has been deleted'
            ]);
        }
    }
}
