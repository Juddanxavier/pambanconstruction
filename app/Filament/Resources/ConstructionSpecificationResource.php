<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ConstructionSpecificationResource\Pages;
use App\Models\ConstructionSpecification;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\Grid;

class ConstructionSpecificationResource extends Resource
{

    protected static ?string $model = ConstructionSpecification::class;

    protected static ?string $navigationIcon = 'heroicon-o-clipboard-check';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            Grid::make([
                'default' => 1,
    
            ])
                ->schema([
                    Select::make('category')
                    ->options([
                        'Structure' => 'Structure',
                        'Floor Finishes' => 'Floor Finishes',
                        'Wall Finishes' => 'Wall Finishes',
                        'Kitchen' => 'Kitchen',
                        'Sanitary & Plumbing' => 'Sanitary & Plumbing',
                        'Main Doors' => 'Main Doors',
                        'Windows' => 'Windows',
                        'Electrical Supply' => 'Electrical Supply',
                        'Lifts' => 'Lifts'
                    ]),
                    Textarea::make('specifications')
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')->sortable(),
                TextColumn::make('category')->searchable()->sortable(),
                TextColumn::make('specifications')->searchable()->limit('50')
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }
    
    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageConstructionSpecifications::route('/'),
        ];
    }    
    protected static function getNavigationBadge(): ?string
{
    return static::getModel()::count();
}
}
