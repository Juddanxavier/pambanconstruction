<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'address', 'construction_specifications', 'description', 'updates', 'status', 'location', 'gallery'];

    protected $casts =  [
        'gallery' => 'array',
        'updates' => 'array',
        'construction_specifications' => 'array'
    ];
}
