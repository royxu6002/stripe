<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\ConfirmsPasswords;
use Validator;

class ConfirmPasswordController extends Controller
{
    use ConfirmsPasswords;

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    
    public function confirm(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'password' => ['confirmed', 'min:8', 'required']
        ]);

        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ])
        }

        $this->resetPasswordConfirmationTimeout($request);

        return response()->json([
            'msg' => 'password has been changed'
        ]);
    }
}
