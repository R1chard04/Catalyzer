// chrome.runtime.onMessage.addListener((request, sender, sendMessage)=>{
//     value = request.message;
//     console.log(value);

//     greet();
//   });

greet();
setInterval(updateTime, 10);
display_past_websites();
delete_bookmarks();

  function greet(){
    var today = new Date();
    const greet1 = "Good morning, ";
    const greet2 = "Good afternoon, ";
    const greet3 = "Good evening, ";
  
    var n = localStorage.getItem('name');
    var greeting = document.getElementById('greetingHeading');
    if (today.getHours() > 4 && today.getHours() < 12) {
      greeting.innerHTML = greet1.concat(n);
    }
    else if(today.getHours() >= 12 && today.getHours() < 16){
      greeting.innerHTML = greet2.concat(n);
    }
    else if(today.getHours() >= 16 && today.getHours() <= 24){
      greeting.innerHTML = greet3.concat(n);
    }
  }

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

function display_past_websites(){
  var index = 0;
    for (var i = 1; i <= 10; i++){
      if (localStorage.getItem(`${i}`)){
        addCode(i);
        var elements = document.getElementsByClassName('website-links');
        var website = localStorage.getItem(`${i}`);
        elements[index].href = `${JSON.parse(website).url}`;
        elements[index].innerHTML = `${JSON.parse(website).name}`;
        index += 1;
      }
      
    }
}
function addCode(i){
  document.getElementById("bookmark-list-div").insertAdjacentHTML("beforeend", `
    <button type="button" id="linkbtn${i}" class="bookmark-container">
      <span>
        <a href="chrome://newtab/" class="website-links">New Chrome Tab</a>
      </span>
    </button>
    <button type="button" id="linkbtn-del${i}" class="remove-bookmark-btn">Delete</button> <br>
  `);
}

function delete_bookmarks(){
  if (document.getElementById('linkbtn-del1')){
    document.getElementById("linkbtn-del1").onclick = function(){
      window.localStorage.removeItem("1");
    }
  }
  if (document.getElementById('linkbtn-del2')){
    document.getElementById("linkbtn-del2").onclick = function(){
      window.localStorage.removeItem("2");
    }
  }
  if (document.getElementById('linkbtn-del3')){
    document.getElementById("linkbtn-del3").onclick = function(){
      window.localStorage.removeItem("3");
    }
  }
}

  