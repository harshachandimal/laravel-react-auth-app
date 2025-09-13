<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory,HasUuids;
    protected $fillable = [
        'product_name',
        'product_price',
        'product_description',
        'product_qty',
    ];
}
