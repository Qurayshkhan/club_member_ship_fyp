<?php

namespace App\Services;

use GuzzleHttp\Client;

class DietPlanApiService
{
    protected $baseUrl = "https://fitness-calculator.p.rapidapi.com/";
    protected $client;
    // protected $appId = "fa6c8144";
    // protected $appKey = "264b6b9652fa024d4bf483605a2b725f";
    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => $this->baseUrl,
            'headers' => [
                'X-RapidAPI-Host' => 'fitness-calculator.p.rapidapi.com',
                'X-RapidAPI-Key' => 'fab8f93843mshd499e0a9d0e7de9p120263jsn255812fb2fb6',
            ],
        ]);
    }

    public function getRequest($endPoint, $data)
    {
        $response = $this->client->get($endPoint, [
            'query' => $data
        ]);

        return $response->getBody()->getContents();
    }
}
