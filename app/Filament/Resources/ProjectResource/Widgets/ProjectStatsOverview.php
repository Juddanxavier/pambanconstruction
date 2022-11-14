<?php

namespace App\Filament\Resources\ProjectResource\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Card;
use App\Models\Project;

class ProjectStatsOverview extends BaseWidget
{
    protected function getCards(): array
    {
        $Upcoming = Project::Where('status', 'Upcoming') -> count();
        $Ongoing = Project::Where('status', 'Ongoing') -> count();
        $Completed = Project::Where('status', 'Completed') -> count();
        return [
            Card::make('Total Projects', Project::all()->count()),
            Card::make('Upcoming', $Upcoming),
            Card::make('Ongoing', $Ongoing),
            Card::make('Completed', $Completed),
        ];
    }
}
