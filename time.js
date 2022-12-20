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


chrome.runtime.onMessage.addListener((request, sender, sendMessage)=>{
  value = request.message;
  console.log(value);

  greet();
  function greet(){
    var today = new Date();
    const greet1 = "Good morning, ";
    const greet2 = "Good afternoon, ";
    const greet3 = "Good evening, ";
  
    var greeting = document.getElementById('greetingHeading');
    if (today.getHours() > 4 && today.getHours() < 12) {
      greeting.innerHTML = greet1.concat(value);
    }
    else if(today.getHours() >= 12 && today.getHours() < 16){
      greeting.innerHTML = greet2.concat(value);
    }
    else if(today.getHours() >= 16 && today.getHours() <= 24){
      greeting.innerHTML = greet3.concat(value);
    }
  }
});