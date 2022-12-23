document.addEventListener("DOMContentLoaded", init, false);

function init(){
    displayName();
    addToBookmark();

    //displays name on main_page
    function displayName(){
        let username;
        document.getElementById("nameButton").onclick = function(){
            username = document.getElementById("username").value;
            // document.getElementById("myLabel").innerHTML = "hello " + username;
    
            chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{
                chrome.tabs.sendMessage(tabs[0].id, {message:username}, (resp)=>{
                    // var div = document.createElement('div')
                    // div.innerHTML = `<p class="text-warning">Notification ${resp.msg}</p>`;
                    // document.body.appendChild(div);
                })
            })
        }
    }

    //adds last-visited website to bookmark list
    function addToBookmark(){
        document.getElementById("websiteButton").onclick = function(){
            let website_name = document.getElementById("site_name").value;
            chrome.tabs.query({active:true, currentWindow:true}, tabs => {
                let tab = tabs[0].url;
                document.getElementById("myLabel").innerHTML = tab;
            })
        }
    }
    
    
    
}
