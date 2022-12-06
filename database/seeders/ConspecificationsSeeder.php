<?php

namespace Database\Seeders;

use App\Models\ConstructionSpecification;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ConspecificationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $specifications = [
            [
                'category' => 'Structure',
                'specifications' => 'RCC frame structure with masonry partitions.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Structure',
                'specifications' => 'Internal masonry — Good quality table moulded bricks.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Floor Finishes',
                'specifications' => 'Living & Dining - Vitrified Tiles of a reputed brand.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Floor Finishes',
                'specifications' => 'Kitchen - Good quality Granite.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Floor Finishes',
                'specifications' => 'Bedrooms - 2 x 2 Vitrifies Tiles.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Floor Finishes',
                'specifications' => 'Utility - 2x2 Vitrified Tile of a reputed brand.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Floor Finishes',
                'specifications' => 'Common staircase granite with Anti-skid strips.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Floor Finishes',
                'specifications' => 'Toilets - Designer tiles up to ceiling.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Wall Finishes',
                'specifications' => 'Internal walls & ceiling - Smooth putty finish with 2 coats of emulsion paint of reputed brand over one coat of primer.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Wall Finishes',
                'specifications' => 'External walls - For textured finish, 2 coats of exterior emulsion paint of reputed brand over one coat of primer.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Kitchen',
                'specifications' => 'Kitchen platforms will be in Granite.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Kitchen',
                'specifications' => 'Provision for Electric oven, Microwave, Exhaust Fan will be provided in all kitchen units.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Sanitary & Plumbing',
                'specifications' => 'Bedroom Toilets - Western Style, Porcelain EWC of Jaquar / equivalent.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Sanitary & Plumbing',
                'specifications' => 'Wash Basin - Porcelain wash basins of 	Jaquar / equivalent.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Sanitary & Plumbing',
                'specifications' => 'Bathrooms will be provided with shower cubicle, rain shower and a hand shower.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Sanitary & Plumbing',
                'specifications' => 'Overhead Showers - Overhead showers of Jaquar/Parry ware/ Equivalent.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Sanitary & Plumbing',
                'specifications' => 'Faucets - All faucets heavy body metal fittings of Jaquar/Parry ware/Equivalent.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Sanitary & Plumbing',
                'specifications' => 'Hot water connection will be provided to the shower, wash basin in each bathroom.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Sanitary & Plumbing',
                'specifications' => 'Plumbing - All external water supply lines & drainage lines shall be in PVC pipes Internal water supply lines will be in Concealed CPVC Pipes.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Main Doors',
                'specifications' => 'Main door - Teakwood frame Height - 8 feet.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Main Doors',
                'specifications' => 'Safety Gates for each main door.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Main Doors',
                'specifications' => 'Other doors - Hardwood Panelled Door. Door Frames of Sal Wood 4 inch by 3 inch.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Main Doors',
                'specifications' => 'The Internal door shutters and frames shall have a melamine matte finish.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Windows',
                'specifications' => 'Aluminium windows / UPVC.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Electrical Supply',
                'specifications' => '3-Phase supply with independent meters and phase change facility in each apartment.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Electrical Supply',
                'specifications' => 'Concealed electrical wiring with Finolex Cables or equivalent make and sufficient points with Anchor or equivalent modular switches.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Electrical Supply',
                'specifications' => 'False Ceiling will have LED lights.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Electrical Supply',
                'specifications' => 'Data Points and CAT 6 Cable with networking option for all bedroom and living areas.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'category' => 'Lifts',
                'specifications' => 'Passenger elevators shall be provided with automatic doors and stainless steel finish inside the cabins.',
                'created_at' => now(),
                'updated_at' => now()
            ]
            ];
            foreach($specifications as $key => $value) {
                ConstructionSpecification::create($value);
            }
    }
}
