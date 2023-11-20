<?php

namespace App\Console\Commands;

use App\Jobs\AnnouncementEmail;
use Illuminate\Console\Command;

class Announcement extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:sendAnnouncement {--email= : User email} {--data= : Data}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $email = $this->option('email');
        $data = $this->option('data');
        AnnouncementEmail::dispatch($email, $data)->delay(now()->addSeconds(60));
        $this->info('Announcement dispatched successfully!');
        return Command::SUCCESS;
    }
}
