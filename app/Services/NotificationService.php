<?php

namespace App\Services;

use App\Notifications\EventNotification;

class NotificationService
{
    public function setGoalNotification($user, $details)
    {
        $user->notify(new EventNotification($user, $details));
    }
}
