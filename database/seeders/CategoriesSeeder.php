<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class categoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category = [
            [
                'category' => 'Structure',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Floor Finishes',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Wall Finishes',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Kitchen',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Sanitary & Plumbing',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Windows',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Electrical Supply',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Lifts',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Painting',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];
        foreach($category as $key => $value) {
                Category::create($value);
            }
    }
}
