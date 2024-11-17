<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use App\Http\Controllers\Controller;
use App\Models\User;
use Str;

class RegisterController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function register(Request $request)
    {
        $validator = $this->validator($request->all());
        
        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ]);
        }

        if(User::find($request->input('email'))) {
            return response()->json([
                'errors' => collect(['email' => ['email has been registered']])
            ]);
        }

        event(new Registered($user = $this->create($request->all())));

        $token = Str::random(80);
        $user->update([
            'api_token' => hash('sha256', $token)
        ]);

        return response()->json([
            'msg' =>  'registered successfully!'
        ]);
    }

    public function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => ['string', 'required', 'max:100', 'min:2'],
            'last_name' => ['string', 'required', 'max:100', 'min:2'],
            'email' => ['email', 'required', 'unique:users', 'string', 'max:255'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    public function create(array $data)
    {
        return User::create([
            'name' => $data['first_name'].' '.$data['last_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    protected function guard()
    {
        return Auth::guard('api');
    }
}
