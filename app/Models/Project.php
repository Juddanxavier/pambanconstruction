<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'slug', 'area', 'uds', 'address', 'construction_specifications', 'description', 'updates', 'status', 'location', 'gallery', 'files'];

    protected $casts =  [
        'gallery' => 'array',
        'updates' => 'array',
        'construction_specifications' => 'array',
        'files' => 'array'
    ];
}
