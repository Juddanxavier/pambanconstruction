<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Packages extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'rate', 'is_published', 'content'];

    protected $casts =  [
        'content' => 'array',
        'is_published' => 'boolean'
    ];
}
