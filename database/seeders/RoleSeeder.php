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
            'classes',
            'account_details',
            'can_view_users',
            'can_view_dashboard',
            'can_view_memberships',
            'can_view_classes',
            'can_view_account',

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
        $memberRole = Role::create(['name' => 'member']);
        $role->givePermissionTo(Permission::all());
        $memberRole->givePermissionTo(['dashboard', 'can_view_dashboard', 'can_view_account']);
    }
}
