
//TODO: send request to server, JSON format

chrome.contextMenus.create({
    id: "contextMenuItem",
    title: "Search for '%s' in ChatGPT",
    contexts: ["selection"],
    onclick: sendRequest("THC")
});
/*
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Get the selected text from the message
    const selectedText = message.text;
    console.log("selectedText: ", selectedText);
    // Create the data you want to send in the request
    const data = {
        text: selectedText
    };
    console.log("data: ", data);
    //send the data to the server

} );*/
/*
chrome.contextMenus.onClicked.addListener( ( info, tab ) => {
    if (info.menuItemId === "contextMenuItem") {
        fetch('http://localhost:3000/', {
            method: 'post',
            body: "THC"
        }).then(function(r){
            return r.json();
        }).then(function(data){
            console.log(data);
        });
    }


});
*/

/*
 chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    let selectedText = message.text;

    // Use the selectedText in the background script
    console.log('Selected text received in the background script:', selectedText);
});

chrome.tabs.query( { active: true, currentWindow: true }, tabs => {


    console.log( "...." );

} );

 */
function sendRequest(selectedText) {
    fetch('http://localhost:3000/', {
        method: 'post',
        body: JSON.stringify({content: selectedText}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(r){
        return r.json();
    }).then(function(data){
        console.log(data);
    });
}

