<?php

namespace App\Providers;

use Filament\Facades\Filament;
use Illuminate\Foundation\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (App::environment(['staging', 'prod'])) {
            URL::forceScheme('https');
        }
        Filament::serving(function() {
            Filament::registerTheme(
                app(Vite::class)('resources/css/filament.css')
            );
        });
    }
}
