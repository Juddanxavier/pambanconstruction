<?php

namespace App\Filament\Widgets;

use App\Models\Project;
use App\Models\ConstructionSpecification;
use App\Models\Testimonial;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Card;

class StatsOverview extends BaseWidget
{
    protected static ?int $sort = 3;

    protected function getCards(): array
    {
        $projects = Project::all()->count();
        $speicifications = ConstructionSpecification::all()->count();
        $testimonal = Testimonial::all()->count();

        return [
            Card::make('Total Projects', $projects)
                ->chart([7,2,10,3,15,4,17]),
            Card::make('Total Construction Specifications', $speicifications)
                ->chart([7,2,10,3,15,4,17]),
            Card::make('Total Testimonals', $testimonal)
                ->chart([7,2,10,3,15,4,17])
        ];
    }
}
