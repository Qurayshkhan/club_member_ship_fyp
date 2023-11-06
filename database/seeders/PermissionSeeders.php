<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // foreach ($permissions as  $permissions) {
        //     Permission::firstOrCreate(['name' => $permissions], [
        //         'name' => $permissions,
        //         'guard_name' => 'web',
        //     ]);
        // }
    }
}
