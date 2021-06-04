<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function index()
    {
        // the logic of your page will be here

        // as a response we will return an array of data
        return [
            'success' => true,
            'message' => 'Hello world from first laravel project',
            'errors' => [],
            'data' => [1, 2, 3]
        ];
    }
}
