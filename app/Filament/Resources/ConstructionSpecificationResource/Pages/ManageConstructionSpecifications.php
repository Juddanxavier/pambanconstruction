<?php

namespace App\Filament\Resources\ConstructionSpecificationResource\Pages;

use App\Filament\Resources\ConstructionSpecificationResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageConstructionSpecifications extends ManageRecords
{
    protected static string $resource = ConstructionSpecificationResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
