<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ConsigneeAddress;
use Validator;
use Exception;
use Auth;

class ConsigneeaddController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function create(User $user, Request $request)
    {
    
        $validator = $this->validateAddress($request->all());

        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ]);
        }

        $add = $this->guard()->user()->consigneeaddresses()->create([
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
            'msg' => 'address for consignee has been created',
            'address' =>  $add
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

    public function show(User $user, ConsigneeAddress $address)
    {

        if($address->user_id === $this->guard()->user()->id) {
            return $address;
        }
    }

    public function update(User $user, ConsigneeAddress $address, Request $request)
    {
        $validator = $this->validateAddress($request->all());

        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ]);
        }

        if($address->user_id == $this->guard()->user()->id) {

            $result = ConsigneeAddress::where('id', $address->id)->update([
                'name' => $request->input('first_name'). ' '.$request->input('last_name'),
                'company_name' => $request->input('company_name') ?? null,
                'phone' =>  $request->input('phone'),
                'address' => $request->input('address'),
                'city' => $request->input('city'),
                'state' => $request->input('state'),
                'zip_code' => $request->input('zip_code'),
                'country' => $request->input('country')
            ]);
            
            $address = ConsigneeAddress::where('id', $address->id)->get();
            
            if($result) {
                return response()->json([
                    'msg' => 'address for consignee has been updated',
                    'address' => $address[0],
                    'status' => 'succ'
                ]);
            }
            
        }
    }

    public function destroy(User $user, ConsigneeAddress $address)
    {
        if($address->user_id == $this->guard()->user()->id ) {
            $result = $address->delete();
            if($result) {
                return response()->json([
                    'msg' => 'address has been deleted'
                ]);
            }
        }
    }

    public function guard()
    {
        return Auth::guard('api');
    }
}
