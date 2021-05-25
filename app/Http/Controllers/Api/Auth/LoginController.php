<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Hash;
use Str;
use Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    use ThrottlesLogins;

    public function __construct()
    {
        $this->middleware('api')->except('login');
    }

    public function login(Request $request)
    {
        $validator = $this->validateLogin($request->all());
        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->getMessageBag()->toArray()
            ]);
        }

        if($this->hasTooManyLoginAttempts($request)) {
            return $this->sendLockoutResponse($request);
        }

        return $this->attemptLogin($request);
    }

    public function validateLogin($data)
    {
        return Validator::make($data,[
            'email' => 'required|email',
            'password' => 'required|min:8'
        ]);
    }

    public function attemptLogin(Request $request)
    {
        $this->incrementLoginAttempts($request);
        $user = User::where('email', $request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password)) {
            return $this->sendFailedLoginResponse($request);
        }
        $token = Str::random(80);
        $user->update([
            'api_token' => hash('sha256', $token)
        ]);
        return \Response::make([
            'cle_store_token' => $token,
            'user' => $user->load('orders.skus', 'orders.shipment', 'orders.transaction:income,id,order_id', 'invoiceaddresses', 'consigneeaddresses'),
            'msg' => 'You have logged in'
        ]);
    }

    public function username()
    {
        return 'email';
    }

    protected function sendFailedLoginResponse(Request $request)
    {
        $message = collect(['errors' => ['email' => ['password/email does not match']]]);

        return $message->toArray();
    }

    public function logout(Request $request)
    {
        // 销毁本地 sessionStorage 的 cle_store_token 即可以实现登出;
        Auth::guard('api')->user()->update([
            'api_token' => null
        ]);

        Auth::guard('api')->logout();

        return response()->json([
            'msg' => 'you have logged out',
        ]);
    }

}
