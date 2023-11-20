<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\AnnouncementService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    protected $announcementService;
    public function __construct(AnnouncementService $announcementService)
    {
        $this->announcementService = $announcementService;
    }
    public function createAnnouncements()
    {
        return Inertia::render('Admin/Announcements/Announcements');
    }

    public function sendAnnouncements(Request $request)
    {
        $data = $request->text;
        return $this->announcementService->sendAnnouncementService($data);
    }
}
