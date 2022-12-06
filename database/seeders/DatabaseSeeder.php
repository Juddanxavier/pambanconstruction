<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'admin@admin.com',
        //     'password' => 'admin'
        // ]);
        // DB::table('construction_specifications')->insert(
            
        //     // [
        //     //     'category' => '',
        //     //     'specifications' => ''
        //     // ],
        // );
        $this->call(ConspecificationsSeeder::class);
    }
}
