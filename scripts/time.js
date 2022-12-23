function updateTime(){
  var today = new Date();
  if(today.getMinutes() < 10){
    var time = today.getHours() + ":0" + today.getMinutes();
  }
  else if(today.getMinutes() >= 10){
    var time = today.getHours() + ":" + today.getMinutes();
  }
  var t = document.getElementById('currentTime');
  t.innerHTML = time;
  

}
setInterval(updateTime, 10);
