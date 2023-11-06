<?php

namespace Database\Seeders;

use App\Models\Membership;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MembershipSeeders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $memberships = [
            [
                "id" => 1,
                'name' => 'Free',
                'description' => 'Labore id quibusdam Labore id quibusdam',
                'price' => 0,
                'member_ship_type' => 'free',
                'duration' => 1,
            ],
            [
                "id" => 2,
                'name' => 'Standered',
                'description' => 'Ex laborum Consequa',
                'price' => 300,
                'member_ship_type' => 'paid',
                'duration' => 3,
            ],
            [
                "id" => 3,
                'name' => 'Premium',
                'description' => 'Quo distinctio Et i',
                'price' => 500,
                'member_ship_type' => 'paid',
                'duration' => 12,
            ],
        ];
        foreach ($memberships as  $membership) {
            Membership::firstOrCreate(
                ['id' => $membership['id']],
                $membership
            );
        }

        $user = User::find(1);
        $user->memberships()->attach(1);
    }
}
