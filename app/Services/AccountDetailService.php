<?php

namespace App\Services;

use App\Repositories\AccountDetailRepository;

class AccountDetailService
{

    protected $accountDetailRepository;
    public function __construct(AccountDetailRepository $accountDetailRepository)
    {
        $this->accountDetailRepository = $accountDetailRepository;
    }

    public function accountDetailsService()
    {
        return $this->accountDetailRepository->accountDetailsData();
    }
}
