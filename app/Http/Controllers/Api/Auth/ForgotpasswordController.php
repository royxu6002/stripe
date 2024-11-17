<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Mail;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Passwords\PasswordBroker;

class ForgotPasswordController extends Controller
{
    use SendsPasswordResetEmails;


    public function __construct()
    {
    
    }

   public function sendResetLinkEmail(Request $request)
   {

       $validator = $this->validateEmail($request->all());

        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->getMessageBag()->toArray()
            ]);
        }

        $user = User::where('email', $request->email)->first();
        if(!$user) {
            return response()->json([
                'errors' => collect(['email' => ['Your email is not registerd at our website']])->toArray()
            ]);
        }

        $password_broker = app(PasswordBroker::class);
        $token = $password_broker->createToken($user);

        $result = $user->sendPasswordResetNotification($token);
        if($result = false) {
            return response()->json([
                'errors' => collect(['email' => ['sorry, something has go wrong, please try again']])->toArray()
            ]);
        } 
        
        return response()->json([
            'msg' => 'email has been send, please check inbox or junk box to reset passsword'
        ], 200);
   }

   public function validateEmail($data)
   {    
        return Validator::make($data, [
            'email' => 'email|required'
       ]);
   }

   public function broker()
    {
        return Password::broker();
    }
}
