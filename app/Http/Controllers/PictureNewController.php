<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PictureNewController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getAction()
    {

        return view('picture_new');
    }

    public function postAction(Request $request)
    {
        $canvas = $request->input('text');

        return view('picture_new', [
            'canvas' => $canvas,
        ]);

    }

}
