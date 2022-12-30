// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// });

document.addEventListener("DOMContentLoaded", init, false);

function init(){
    displayName();
    addToBookmark();
    addToTask();
}

//displays name on main_page
function displayName(){
    let username;
    document.getElementById("nameButton").onclick = function(){
        username = document.getElementById("username").value;
        window.localStorage.setItem('name', username);
    }
}

//adds last-visited website to bookmark list
function addToBookmark(){
    document.getElementById("websiteButton").onclick = function(){
        let website_name = document.getElementById("site_name").value;
        chrome.tabs.query({active:true, currentWindow:true}, tabs => {
            let tab = tabs[0].url;
            var tmp = {'name': website_name, 'url': tab};
            var i;
            for (i = 1; i <= 10; i++){
                if (window.localStorage.getItem(`${i}`) == null){
                    window.localStorage.setItem(`${i}`, JSON.stringify(tmp));
                    document.getElementById('success_alert_bookmark').innerHTML = "Website successfully added!";
                    break;
                }
                else if(i == 10){
                    document.getElementById('success_alert_bookmark').innerHTML = "Too many websites added!"
                }
            }
        });
    }
}

function addToTask(){
    document.getElementById("taskButton").onclick = function(){
        let task_name = document.getElementById("task").value;
        for (var j = 11; j <= 20; j++){
            if (window.localStorage.getItem(`${j}`) == null){
                window.localStorage.setItem(`${j}`, task_name);
                document.getElementById('success_alert_task').innerHTML = "Task successfully added!";
                break;
            }
            else if (j == 10){
                document.getElementById('success_alert_bookmark').innerHTML = "Too many tasks added!"
            }
        }
    }
}
