<?php

namespace App\Filament\Widgets;

use App\Models\Project;
use Filament\Widgets\LineChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class Projectsline extends LineChartWidget
{
    protected static ?string $heading = 'Projects Created';
    protected static ?string $height = '300px';
    protected static ?int $sort = 2;
    protected static ?array $options = [
        'plugins' => [
            'legend' => [
                'display' => true,
            ],
        ],
    ];
    
    protected function getData(): array
    {
        $trend = Trend::model(Project::class)
                    ->between(
                        start: now()->startOfYear(),
                        end: now()->endOfYear(),
                    )
                    ->perMonth()
                    ->count();
        return [
            'datasets' => [
                [
                    'label' => 'Projects Created per Month',
                    'backgroundColor' => "hsl(252, 82.9%, 67.8%)",
                    'borderColor' => "hsl(252, 82.9%, 67.8%)",
                    'data' => $trend->map(fn (TrendValue $value)=>$value->aggregate),
                ],
            ],
            'labels' => $trend->map(fn(TrendValue $value)=> $value->date),
        ];
    }
}
