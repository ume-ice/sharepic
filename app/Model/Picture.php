<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    protected $fillable = ['title', 'user_id', 'data', 'status'];
    protected $table = 'pictures';
}
