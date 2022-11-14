<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    
    
    protected $fillable = ['title', 'address', 'description', 'status', 'map', 'gallery'];

    protected $casts =  [
        'gallery' => 'array'
    ];

}
