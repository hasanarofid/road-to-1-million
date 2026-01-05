<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Order;
use App\Models\Inventory;
use App\Models\StaffActivity;
use App\Models\Approval;
use App\Models\Subscription;
use App\Models\AiUsage;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Roles & Permissions Setup
        $adminRole = Role::create(['name' => 'admin']);
        $managerRole = Role::create(['name' => 'manager']);
        $staffRole = Role::create(['name' => 'staff']);

        $permissions = [
            'manage orders',
            'manage inventory',
            'view activities',
            'handle approvals',
            'view analytics',
            'monitor ai cost',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        $adminRole->givePermissionTo(Permission::all());
        $managerRole->givePermissionTo(['manage orders', 'manage inventory', 'view activities', 'handle approvals']);
        $staffRole->givePermissionTo(['manage orders', 'manage inventory']);

        // 2. Dummy Users
        $admin = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
        ]);
        $admin->assignRole($adminRole);

        $manager = User::factory()->create([
            'name' => 'Manager User',
            'email' => 'manager@example.com',
            'password' => Hash::make('password'),
        ]);
        $manager->assignRole($managerRole);

        $staff = User::factory()->create([
            'name' => 'Staff User',
            'email' => 'staff@example.com',
            'password' => Hash::make('password'),
        ]);
        $staff->assignRole($staffRole);

        // 3. Dummy Orders
        Order::create(['order_number' => 'ORD-001', 'customer_name' => 'John Doe', 'total_amount' => 1500000, 'status' => 'completed']);
        Order::create(['order_number' => 'ORD-002', 'customer_name' => 'Jane Smith', 'total_amount' => 750000, 'status' => 'pending']);
        Order::create(['order_number' => 'ORD-003', 'customer_name' => 'Budi Utomo', 'total_amount' => 2000000, 'status' => 'processing']);

        // 4. Dummy Inventory
        Inventory::create(['item_name' => 'MacBook Pro M2', 'sku' => 'LAP-MBP-M2', 'stock_quantity' => 15, 'unit_price' => 25000000]);
        Inventory::create(['item_name' => 'Logitech MX Master 3S', 'sku' => 'ACC-LOGI-MX', 'stock_quantity' => 50, 'unit_price' => 1500000]);
        Inventory::create(['item_name' => 'Dell UltraSharp 27"', 'sku' => 'MON-DELL-U27', 'stock_quantity' => 10, 'unit_price' => 8000000]);

        // 5. Dummy Staff Activities
        StaffActivity::create(['user_id' => $staff->id, 'activity_type' => 'inventory_update', 'description' => 'Updated stock for MacBook Pro M2']);
        StaffActivity::create(['user_id' => $manager->id, 'activity_type' => 'order_approval', 'description' => 'Approved order ORD-001']);

        // 6. Dummy Approvals
        Approval::create(['request_type' => 'expense', 'requester_id' => $staff->id, 'approver_id' => $manager->id, 'status' => 'approved', 'notes' => 'Travel expense for client meeting']);
        Approval::create(['request_type' => 'discount', 'requester_id' => $staff->id, 'status' => 'pending', 'notes' => 'Request 10% discount for bulk order']);

        // 7. Dummy Subscriptions
        Subscription::create(['plan_name' => 'Basic Plan', 'monthly_price' => 500000, 'active_customers' => 45, 'mrr' => 22500000]);
        Subscription::create(['plan_name' => 'Pro Plan', 'monthly_price' => 1500000, 'active_customers' => 12, 'mrr' => 18000000]);

        // 8. Dummy AI Usage
        AiUsage::create(['model_name' => 'gpt-4o', 'tokens_used' => 15000, 'estimated_cost' => 0.45, 'usage_time' => now()]);
        AiUsage::create(['model_name' => 'claude-3-5-sonnet', 'tokens_used' => 8500, 'estimated_cost' => 0.12, 'usage_time' => now()->subHours(2)]);
    }
}
