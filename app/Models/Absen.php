<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Absen extends Model
{
  protected $table = 'absen';
  protected $primaryKey = 'id_absen';
  protected $fillable = [
      'id_siswa',
      'status',

  ];

}
