// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// });

document.addEventListener("DOMContentLoaded", init, false);

function init(){
    displayName();
    addToBookmark();

}

//displays name on main_page
function displayName(){
    let username;
    document.getElementById("nameButton").onclick = function(){
        username = document.getElementById("username").value;
        window.localStorage.setItem('name', username);
        // chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{
        //     window.localStorage.setItem('name', username);
        //     chrome.tabs.sendMessage(tabs[0].id, {message:username}, (resp)=>{})
        // })
    }
}

//adds last-visited website to bookmark list
function addToBookmark(){
    document.getElementById("websiteButton").onclick = function(){
        let website_name = document.getElementById("site_name").value;
        chrome.tabs.query({active:true, currentWindow:true}, tabs => {
            let tab = tabs[0].url;
            var tmp = {'name': website_name, 'url': tab};
            window.localStorage.setItem('1', JSON.stringify(tmp));
            document.getElementById('success_alert').innerHTML = "Website successfully added!"
        })
    }
}
