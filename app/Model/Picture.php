<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    protected $fillable = ['user_id', 'title', 'data', 'status', 'published_at'];
    protected $table = 'pictures';
}
