<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PackageResource\Pages;
use App\Filament\Resources\PackageResource\RelationManagers;
use App\Models\Packages;
use App\Models\ConstructionSpecification;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Checkbox;
use Filament\Tables\Columns\TextColumn;

class PackageResource extends Resource
{
    protected static ?string $model = Packages::class;
    protected static ?string $navigationGroup = 'Projects & Packages';

    protected static ?string $navigationIcon = 'heroicon-o-currency-rupee';
protected static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
                ->schema([
                TextInput::make('title')->required(),
                TextInput::make('rate')->required(),
                Checkbox::make('is_published')->inline(false)->label('Publish?'),
                Repeater::make('content')
                                        ->schema([
                                            Select::make('category')
                                                ->required()
                                                ->label('Category')
                                                ->options(ConstructionSpecification::query()->pluck('category', 'category')->toArray())
                                                ->afterStateUpdated(fn(callable $set) => $set('specifications', null))
                                                ->reactive(),
                                            Select::make('specifications')
                                                ->required()
                                                ->multiple()
                                                ->label('Specifications')
                                                ->options(function (callable $get) {
                                                    $specific = ConstructionSpecification::where('category', '=', $get('category'))->get()->pluck('specifications', 'specifications');
                                                    if ($specific) {
                                                        return $specific;
                                                    }
                                                    return null;
                                                })
                                                ->reactive(),
                                        ])
                                        ->itemLabel(fn(array $state): ?string => $state['category'] ?? null)
                                        ->collapsible(),
        ])
        ]);
    } 

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')->sortable(),
                TextColumn::make('title')->searchable(),
                TextColumn::make('rate')->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }
    
    public static function getRelations(): array
    {
        return [
            //
        ];
    }
    
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPackages::route('/'),
            'create' => Pages\CreatePackage::route('/create'),
            'edit' => Pages\EditPackage::route('/{record}/edit'),
        ];
    }    
}
