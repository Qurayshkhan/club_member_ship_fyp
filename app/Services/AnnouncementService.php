<?php

namespace App\Services;

use App\Jobs\AnnouncementEmail;
use App\Repositories\UserRepository;
use Carbon\Carbon;
use Exception;

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
        $delay = 30;
        $userWithMemberRole = $this->userRepository->getUserEmails();
        foreach ($userWithMemberRole as $key => $user) {
            AnnouncementEmail::dispatch($user, $data)->delay(Carbon::now()->addSeconds($delay));
            $delay += 30;
        }
    }
}
