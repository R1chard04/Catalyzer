document.addEventListener("DOMContentLoaded", init, false);

function init(){
    let username;

    document.getElementById("nameButton").onclick = function(){
        username = document.getElementById("username").value;
        document.getElementById("myLabel").innerHTML = "hello " + username;
        
        chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{
            chrome.tabs.sendMessage(tabs[0].id, {message:username}, (resp)=>{
                var div = document.createElement('div')
                div.innerHTML = '<p class="text-warning">Notification ${resp.msg}</p>';
                document.body.appendChild(div);
            })
        })
    }
    
}
