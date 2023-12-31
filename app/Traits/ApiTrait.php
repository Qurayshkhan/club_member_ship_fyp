<?php

namespace App\Traits;

trait ApiTrait
{
    public function success($data, $message, $code = 201)
    {

        $response = [
            'code' => $code,
            'message' => $message,
            'data' => $data,
        ];

        return response()->json($response);
    }
    public function error($data, $message, $code = 400)
    {

        $response = [
            'code' => $code,
            'message' => $message,
            'data' => $data,
        ];

        return response()->json($response);
    }
    public function successJsonDecode($data, $message, $code = 200)
    {

        $response = [
            'code' => $code,
            'message' => $message,
            'data' => json_decode($data),
        ];
        return $response;
    }
}
