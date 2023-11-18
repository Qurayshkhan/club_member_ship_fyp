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
            'analytics',
            'users',
            'memberships',
            'classes',
            'attendances',
            'routines',
            'account_details',
            'can_view_users',
            'can_view_dashboard',
            'can_view_memberships',
            'can_view_classes',
            'can_view_account',
            'can_view_attendances',
            'can_view_admin_analytics',
            'can_view_member_analytics',
            'can_view_my_routine',

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
        $role->givePermissionTo(
            [
                'dashboard',
                'analytics',
                'users',
                'memberships',
                'classes',
                'attendances',
                'account_details',
                'can_view_users',
                'can_view_dashboard',
                'can_view_memberships',
                'can_view_classes',
                'can_view_account',
                'can_view_attendances',
                'can_view_admin_analytics'

            ]
        );
        $memberRole->givePermissionTo(['dashboard', 'can_view_dashboard', 'can_view_account', 'can_view_member_analytics', 'can_view_my_routine']);
    }
}
