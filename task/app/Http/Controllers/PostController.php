<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    //
     public function index()
    {
        //
         $postList =  \Illuminate\Support\Facades\DB::select('call list_posts');
         $hi ="fd";
         //var_dump($postList);
         //exit();
         return view('posts.index', compact('postList','hi'));
    }
}
