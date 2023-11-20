<?php

namespace App\Jobs;

use App\Services\NotificationService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class AnnouncementEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $email, $data, $notificationService;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($email = null, $data)
    {
        $this->email = $email;
        $this->data = $data;
        $this->notificationService = new NotificationService;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->notificationService->announcementMail($this->email, $this->data);
    }
}
