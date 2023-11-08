<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
        ]);

        $member = User::create([
            'name' => 'member',
            'email' => 'member@gmail.com',
            'password' => Hash::make('password'),
        ]);

        $user->assignRole('admin');
        $member->assignRole('member');
    }
}
