<?php

namespace App\Http\Controllers;

use App\Action\User\UserSignIn;
use App\Http\Requests\User\UserSignInValidationRequest;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function userSignIn(UserSignInValidationRequest $request, UserSignIn $userSignIn) : JsonResponse
    {
        $validatedUserSignInRequest = $request->validated();

        return response()->json($userSignIn($validatedUserSignInRequest));


    }


}
