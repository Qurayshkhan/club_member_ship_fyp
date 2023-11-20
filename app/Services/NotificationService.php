<?php

namespace App\Services;

use App\Mail\AnnouncementMail;
use App\Notifications\EventNotification;
use Illuminate\Support\Facades\Mail;

class NotificationService
{
    public function setGoalNotification($user, $details)
    {
        $user->notify(new EventNotification($user, $details));
    }

    public function announcementMail($user, $data)
    {
        return Mail::to($user)->send(new AnnouncementMail($data));
    }
}
