<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\AccountDetailService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AccountDetailsController extends Controller
{
    protected $accountDetailService;

    public function __construct(AccountDetailService $accountDetailService)
    {
        $this->accountDetailService = $accountDetailService;
    }

    public function accountDetailsRecords()
    {
        try {
            $accountDetails = $this->accountDetailService->accountDetailsService();
            return Inertia::render('Admin/Account_details/AccountDetails', ['accountDetails' => $accountDetails]);
        } catch (\Exception $exception) {
            info($exception);
        }
    }
}
