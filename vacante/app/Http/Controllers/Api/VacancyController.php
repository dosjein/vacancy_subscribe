<?php

namespace App\Http\Controllers\Api;

use Dingo\Api\Routing\Helpers;
use Illuminate\Routing\Controller;

class VacancyController extends Controller
{
    use Helpers;

    public function __construct()
    {
        $this->middleware('api.auth');
    }


    public function upload()
    {
        # code...
    }

    public function list()
    {
        # code...
    }
}