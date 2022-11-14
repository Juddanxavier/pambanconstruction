<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Filament\Resources\ProjectResource\Widgets\ProjectStatsOverview;
use App\Models\Project;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Card;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Columns\BadgeColumn;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';
    // protected static ?string $navigationGroup = 'Projects';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
                ->schema([
                TextInput::make('title')-> required(),
                TextInput::make('address')-> required(),
                RichEditor::make('description')
                    -> required(),
                Radio::make('status') -> options([
                    'Upcoming' => 'Upcoming',
                    'Ongoing' => 'Ongoing',
                    'Completed' => 'Completed'
                    ]) -> inline()-> required(),
                TextInput::make('map'),
                FileUpload::make('gallery')
                    ->image()
                    ->multiple()
                    ->label('Project Image')
                    ->enableReordering()
                    ->enableOpen()
                    ->maxFiles(10)
                    ->imageResizeTargetWidth('1200')
                    ->imageResizeTargetHeight('800')
                    ->panelAspectRatio('2:1')
                    ->removeUploadedFileButtonPosition('right')
                    ->panelLayout('compact')


            ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')->sortable(),
                TextColumn::make('title')->searchable(),
                TextColumn::make('status')->sortable(),
                BadgeColumn::make('status')
                    ->colors([
                        'primary' => 'Upcoming',
                        'warning' => 'Ongoing',
                        'success' => 'Completed',
                    ]),
                // ImageColumn::make('gallery')->square(),
            ])
            ->filters([
                SelectFilter::make('status')-> options([
                    'upcoming' => 'Upcoming',
                    'undergoing' => 'Ongoing',
                    'completed' => 'Completed'
                    ])
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
    public static function getWidgets(): array
    {
        return [
            ProjectStatsOverview::class,
            ];
    }
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }    
}
