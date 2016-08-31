<?php

namespace App\Http\Controllers\Api\Auth;

use Dingo\Api\Routing\Helpers;
use Illuminate\Routing\Controller;

class ApiAuthController extends Controller
{
    use Helpers;

    public function __construct()
    {
        $this->middleware('api.auth');
    }

    public function index()
    {
        $credentials = Input::only('email', 'password');

       if ( ! $token = JWTAuth::attempt($credentials)) {
           return Response::json(false, HttpResponse::HTTP_UNAUTHORIZED);
       }

       return compact('token');
    }

}