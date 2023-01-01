greet();
setInterval(updateTime, 10);

display_past_websites();
delete_bookmarks();

display_tasks();
delete_tasks();

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
        addCodeBookmarks(i);
        var elements = document.getElementsByClassName('website-links');
        var website = localStorage.getItem(`${i}`);
        elements[index].href = `${JSON.parse(website).url}`;
        elements[index].innerHTML = `${JSON.parse(website).name}`;
        index += 1;
      }
      
    }
}
function addCodeBookmarks(i){
  document.getElementById("bookmark-list-div").insertAdjacentHTML("beforeend", `
  <br>  
  <button type="button" id="linkbtn${i}" class="bookmark-container">
      <span>
        <a href="chrome://newtab/" class="website-links">New Chrome Tab</a>
      </span>
    </button>
    <button type="button" id="linkbtn-del${i}" class="remove-bookmark-btn">Delete</button> 
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
  if (document.getElementById('linkbtn-del4')){
    document.getElementById("linkbtn-del4").onclick = function(){
      window.localStorage.removeItem("4");
    }
  }
  if (document.getElementById('linkbtn-del5')){
    document.getElementById("linkbtn-del5").onclick = function(){
      window.localStorage.removeItem("5");
    }
  }
  if (document.getElementById('linkbtn-del6')){
    document.getElementById("linkbtn-del6").onclick = function(){
      window.localStorage.removeItem("6");
    }
  }
  if (document.getElementById('linkbtn-del7')){
    document.getElementById("linkbtn-del7").onclick = function(){
      window.localStorage.removeItem("7");
    }
  }
  if (document.getElementById('linkbtn-del8')){
    document.getElementById("linkbtn-del8").onclick = function(){
      window.localStorage.removeItem("8");
    }
  }
  if (document.getElementById('linkbtn-del9')){
    document.getElementById("linkbtn-del9").onclick = function(){
      window.localStorage.removeItem("9");
    }
  }
  if (document.getElementById('linkbtn-del10')){
    document.getElementById("linkbtn-del10").onclick = function(){
      window.localStorage.removeItem("10");
    }
  }
}

function display_tasks(){
  var index = 0;
  for (var i = 11; i <= 20; i++){
    if (localStorage.getItem(`${i}`)){
      addCodeTasks(i);
      var element = document.getElementById(`task-label${i}`);
      var task = localStorage.getItem(`${i}`);
      element.innerHTML = `${task}`;
      index += 1;
    }
  }
}

function addCodeTasks(i){
  document.getElementById('todolist-div').insertAdjacentHTML("beforeend", `
    <button type="text" id="task-label${i}" class="tasks" disabled ></button>
    <button type="button" id="taskbtn-del${i}" class="remove-bookmark-btn">Delete</button>  <br>
  `);
}

function delete_tasks(){
  if (document.getElementById('taskbtn-del11')){
    document.getElementById("taskbtn-del11").onclick = function(){
      document.getElementById("taskbtn-del11").setAttribute("disabled", true);
      window.localStorage.removeItem("11");
    }
  }
  if (document.getElementById('taskbtn-del12')){
    document.getElementById("taskbtn-del12").onclick = function(){
      document.getElementById("taskbtn-del12").setAttribute("disabled", true);
      window.localStorage.removeItem("12");
    }
  }
  if (document.getElementById('taskbtn-del13')){
    document.getElementById("taskbtn-del13").onclick = function(){
      document.getElementById("taskbtn-del13").setAttribute("disabled", true);
      window.localStorage.removeItem("13");
    }
  }
  if (document.getElementById('taskbtn-del14')){
    document.getElementById("taskbtn-del14").onclick = function(){
      document.getElementById("taskbtn-del14").setAttribute("disabled", true);
      window.localStorage.removeItem("14");
    }
  }
  if (document.getElementById('taskbtn-del15')){
    document.getElementById("taskbtn-del15").onclick = function(){
      document.getElementById("taskbtn-del15").setAttribute("disabled", true);
      window.localStorage.removeItem("15");
    }
  }
  if (document.getElementById('taskbtn-del16')){
    document.getElementById("taskbtn-del16").onclick = function(){
      document.getElementById("taskbtn-del16").setAttribute("disabled", true);
      window.localStorage.removeItem("16");
    }
  }
  if (document.getElementById('taskbtn-del17')){
    document.getElementById("taskbtn-del17").onclick = function(){
      document.getElementById("taskbtn-del17").setAttribute("disabled", true);
      window.localStorage.removeItem("17");
    }
  }
  if (document.getElementById('taskbtn-del18')){
    document.getElementById("taskbtn-del18").onclick = function(){
      document.getElementById("taskbtn-del18").setAttribute("disabled", true);
      window.localStorage.removeItem("18");
    }
  }
  if (document.getElementById('taskbtn-del19')){
    document.getElementById("taskbtn-del19").onclick = function(){
      document.getElementById("taskbtn-del19").setAttribute("disabled", true);
      window.localStorage.removeItem("19");
    }
  }
  if (document.getElementById('taskbtn-del20')){
    document.getElementById("taskbtn-del20").onclick = function(){
      document.getElementById("taskbtn-del20").setAttribute("disabled", true);
      window.localStorage.removeItem("20");
    }
  }
}