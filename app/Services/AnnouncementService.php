<?php

namespace App\Services;

use App\Jobs\AnnouncementEmail;
use App\Repositories\UserRepository;
use Carbon\Carbon;

class AnnouncementService
{
    protected $userRepository, $notificationService, $announcementMailJob;
    public function __construct(UserRepository $userRepository, NotificationService $notificationService)
    {
        $this->userRepository = $userRepository;
        $this->notificationService = $notificationService;
    }

    public function sendAnnouncementService($data)
    {
        $userWithMemberRole = $this->userRepository->getUserEmails();
        foreach ($userWithMemberRole as $key => $user) {
            $email = $user->email;
            AnnouncementEmail::dispatch($email, $data)->delay(Carbon::now()->addSeconds(60));
        }
    }
}
