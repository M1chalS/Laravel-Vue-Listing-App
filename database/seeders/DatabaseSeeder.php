<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Listing;
use Illuminate\Database\Seeder;

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

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test2@example.com',
            'is_admin' => true,
        ]);

        Listing::factory(10)->create([
            'user_id' => 1,
        ]);

        Listing::factory(10)->create([
            'user_id' => 2,
        ]);
    }
}
