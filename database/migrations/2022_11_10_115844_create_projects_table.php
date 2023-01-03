<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title');
            $table->string('slug');
            $table->string('area');
            $table->string('uds');
            $table->boolean('is_featured')->default(0);
            $table->text('address');
            $table->text('description');
            $table->text('construction_specifications')->nullable();
            $table->string('status');
            $table->text('location');
            $table->json('updates')->nullable();
            $table->json('gallery')->nullable();
            $table->json('files')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
};
