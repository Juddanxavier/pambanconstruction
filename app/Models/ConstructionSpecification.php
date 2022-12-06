<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConstructionSpecification extends Model
{
    use HasFactory;

    protected $fillable = ['category', 'specifications'];
}
