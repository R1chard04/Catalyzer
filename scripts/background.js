// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if(request.message === 'insert'){
//         let request = insert_records(request.payload);

//         request.then(res => {
//             chrome.runtime.sendMessage({message: 'insert_success', payload: res});
//         });
//     }
//     else if(request.message === 'get'){
//         let request = get_records(request.payload);

//         request.then(res => {
//             chrome.runtime.sendMessage({message: 'get_success', payload: res});
//         });
//     }
//     else if(request.message === 'update'){
//         let request = update_record(request.payload);

//         request.then(res => {
//             chrome.runtime.sendMessage({message: 'update_success', payload: res});
//         });
//     }
//     else if(request.message === 'delete'){
//         let request = delete_record(request.payload);

//         request.then(res => {
//             chrome.runtime.sendMessage({message: 'delete_success', payload: res});
//         });
//     }
// });

// let db = null;

// function create_database(){
//     const request = window.indexedDB.open('MyTestDB');

//     request.onerror = function(event) {
//         console.log("Problem opening DB.");
//     }
//     request.onupgradeneeded = function(event){
//         db = event.target.result;

//         let objectStore = db.createObjectStore('roster', {keyPath: 'name'});

//         objectStore.transaction.oncomplete = function(event){
//             console.log("ObjectStore created.");
//         }
//     }
//     request.onsuccess = function(event){
//         db = event.target.result;
//         console.log("DB OPENED.");
//         insert_records(roster);

//     }

// }

// function delete_database(){
//     const request = window.indexedDB.deleteDatabase('MyTestDB');

//     request.onerror = function(event) {
//         console.log("Problem deleting DB.");
//     }
//     request.onsuccess = function(event){
//         console.log("DB deleted.");
//     }
// }

// function insert_records(records) {
//     if(db){
//         const insert_transaction = db.transaction(["roster"], "readwrite");
//         const objectStore = insert_transaction.objectStore("roster");

//         return new Promise((resolve, reject) => {
//             insert_transaction.oncomplete = function () {
//                 console.log("ALL INSERT TRANSACTIONS COMPLETE.");
//                 resolve(true);
//             }

//             insert_transaction.onerror = function () {
//                 console.log("PROBLEM INSERTING RECORDS.")
//                 resolve(false);
//             }

//             records.forEach(website => {
//                 let request = objectStore.add(website);

//                 request.onsuccess = function () {
//                     console.log("Added: ", website);
//                 }
//             });
//         });
//     }
// }

// function get_record(email) {
//     if (db) {
//         const get_transaction = db.transaction("roster", "readonly");
//         const objectStore = get_transaction.objectStore("roster");

//         return new Promise((resolve, reject) => {
//             get_transaction.oncomplete = function () {
//                 console.log("ALL GET TRANSACTIONS COMPLETE.");
//             }

//             get_transaction.onerror = function () {
//                 console.log("PROBLEM GETTING RECORDS.")
//             }

//             let request = objectStore.get(email);

//             request.onsuccess = function (event) {
//             resolve(event.target.result);
//             }
//         });
//     }
// }

// function update_record(record) {
//     if (db) {
//         const put_transaction = db.transaction("roster", "readwrite");
//         const objectStore = put_transaction.objectStore("roster");

//         return new Promise((resolve, reject) => {
//             put_transaction.oncomplete = function () {
//                 console.log("ALL PUT TRANSACTIONS COMPLETE.");
//                 resolve(true);
//             }

//             put_transaction.onerror = function () {
//                 console.log("PROBLEM UPDATING RECORDS.")
//                 resolve(false);
//             }

//             objectStore.put(record);
//         });
//     }
// }

// function delete_record(email) {
//     if (db) {
//         const delete_transaction = db.transaction("roster", "readwrite");
//         const objectStore = delete_transaction.objectStore("roster");

//         return new Promise((resolve, reject) => {
//             delete_transaction.oncomplete = function () {
//                 console.log("ALL DELETE TRANSACTIONS COMPLETE.");
//                 resolve(true);
//             }

//             delete_transaction.onerror = function () {
//                 console.log("PROBLEM DELETE RECORDS.")
//                 resolve(false);
//             }

//             objectStore.delete(email);
//         });
//     }
// }