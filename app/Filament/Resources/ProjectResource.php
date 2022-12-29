<?php

namespace App\Filament\Resources;


use App\Filament\Resources\ProjectResource\Pages;
use App\Filament\Resources\ProjectResource\Widgets\ProjectStatsOverview;
use App\Models\ConstructionSpecification;
use App\Models\Project;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Components\Tabs\Tab;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Columns\BadgeColumn;
use Livewire\TemporaryUploadedFile;
use Camya\Filament\Forms\Components\TitleWithSlugInput;
use Filament\Forms\Components\Textarea;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static function getNavigationBadge(): ?string
        {
            return static::getModel()::count();
        }
    protected static ?string $navigationIcon = 'heroicon-o-collection';
    // protected static ?string $navigationGroup = 'Projects';

    public static function form(Form $form): Form
    {
    return $form
        ->schema([
            Grid::make([
                'default' => 1,

            ])
                ->schema([

                    Tabs::make('Projects')
                        ->tabs([
                            Tabs\Tab::make('General')
                                ->icon('heroicon-o-identification')
                                ->schema([
                                    TitleWithSlugInput::make(
                                        fieldTitle: 'title',
                                        fieldSlug: 'slug',
                                        urlPath: '/',
                                        titleRules: [
                                            'required',
                                            'string',

                                        ],
                                    )->columnSpan('full'),
                                    Grid::make(2)
                                        ->schema([
                                            TextInput::make('area')->required()->numeric()->suffix('Sq.Ft'),
                                    TextInput::make('uds')->required()->numeric()->suffix('Sq.Ft')
                                        ]),
                                    TextInput::make('address')->required(),
                                    Textarea::make('description')->required(),
                                    // Select::make
                                    Radio::make('status')->options([
                                        'Upcoming' => 'Upcoming',
                                        'Ongoing' => 'Ongoing',
                                        'Completed' => 'Completed',
                                    ])->inline()->required(),
                                    TextInput::make('location')->required()->helperText('Right on google map location then click on latitude and longitude to copy, paste here'),
                                ]),
                            Tabs\Tab::make('Constructions Specifications')
                                ->icon('heroicon-o-clipboard-check')
                                ->schema([
                                    Repeater::make('construction_specifications')
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
                                ]),
                            Tabs\Tab::make('Project Images')
                                ->icon('heroicon-o-photograph')
                                ->schema([
                                    FileUpload::make('gallery')
                                        ->disk('public')
                                        ->preserveFilenames()
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
                                        ->panelLayout('compact'),
                                ]),
Tabs\Tab::make('Brochures')
                                ->icon('heroicon-o-book-open')
                                ->schema([
                                    Repeater::make('files')
                                        ->schema([
                                    TextInput::make('name'),
                                            FileUpload::make('file_path')
                                                ->disk('public')
                                                ->directory('brochures')
                                                ->preserveFilenames()
                                                ->label('Brochure')
                                                ->maxFiles(1)
                                                ->removeUploadedFileButtonPosition('right')
                                        ])
                                        ->itemLabel(fn(array $state): ?string => $state['name'] ?? null)->collapsible(),
                                    ]),
                            Tabs\Tab::make('Project Updates')
                                ->icon('heroicon-o-check-circle')
                                ->schema([
                                    Repeater::make('updates')
                                        ->schema([
                                            DatePicker::make('update_month')->displayFormat('F-yy')->format('F-yy')->reactive(),
                                            FileUpload::make('update_gallery')
                                                ->disk('public')
                                                ->preserveFilenames()
                                                ->image()
                                                ->multiple()
                                                ->label('Project updates')
                                                ->enableReordering()
                                                ->enableOpen()
                                                ->maxFiles(10)
                                                ->imageResizeTargetWidth('1200')
                                                ->imageResizeTargetHeight('800')
                                                ->panelAspectRatio('2:1')
                                                ->removeUploadedFileButtonPosition('right')
                                                ->panelLayout('compact'),
                                        ])
                                        ->itemLabel(fn(array $state): ?string => $state['update_month'] ?? null)->collapsible(),
                                ]),
                        ]),

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
