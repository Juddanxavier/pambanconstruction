<?php

namespace App\Filament\Widgets;

use App\Models\Project;
use Filament\Widgets\PieChartWidget;

class projectsDonut extends PieChartWidget
{
    protected static ?string $heading = 'Project Status';
    protected static ?string $maxHeight = '300px';

    protected function getData(): array
    {
        $completed = Project::where('status', 'completed')->get()->count();
        $upcoming = Project::where('status', 'upcoming')->get()->count();
        $ongoing = Project::where('status', 'ongoing')->get()->count();

        $data = array($completed, + $upcoming, + $ongoing);
        return [
            'datasets' => [
                [
                    'label' => 'Project Status',
                    'data' => $data,
                    'backgroundColor' => [
                        "rgb(133, 105, 241)",
                        "rgb(164, 101, 241)",
                        "rgb(101, 143, 241)",
                                  ],
                    'hoverOffset' => 8,
                    'borderColor' => "rgb(255,255,255)"
                ],
            ],
            
            'labels' => ['Completed', 'Upcoming', 'Ongoing'],
        ];
    }
}
