<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();


        $permissions = [
            'dashboard',
            'users',
            'memberships',
            'can_view_users',
            'can_view_dashboard',
            'can_view_memberships',
        ];


        // create permissions
        foreach ($permissions as  $permissions) {
            Permission::firstOrCreate(['name' => $permissions], [
                'name' => $permissions,
                'guard_name' => 'web',
            ]);
        }

        // create roles and assign created permissions

        // or may be done by chaining

        // $role = Role::create(['name' => 'member'])
        //     ->givePermissionTo(['can_view_users', 'can_view_memberships']);

        $role = Role::create(['name' => 'admin']);
        $role->givePermissionTo(Permission::all());
    }
}
