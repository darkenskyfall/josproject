var d = new Date();
    var time = d.getHours();

    if (time < 7)
      {
      }
      document.getElementById('my_id2').value='Tepat Waktu' ;
    if (time == 7)
      {
      document.getElementById('my_id2').value='Terlambat' ;
      }
    if (time > 7)
      {
      document.getElementById('my_id2').value='Terlambat' ;
      }
