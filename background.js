/*
//TODO: enable search in chatgpt api
using the chatgpt api requires a server with the api key
we will be using node.js and express to create a server - done, testing server is intiated using node server.js, requests are tested using Insomnia
*/
//include chrome extension api

chrome.contextMenus.create({
    id: "contextMenuItem",
    title: "Search for '%s' in ChatGPT",
    contexts: ["selection"],
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
chrome.contextMenus.onClicked.addListener( ( info, tab ) => {
    if( info.menuItemId === "contextMenuItem" && info.selectionText != null ) {

    }
} );

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    let selectedText = message.text;

    // Use the selectedText in the background script
    console.log('Selected text received in the background script:', selectedText);
});

chrome.tabs.query( { active: true, currentWindow: true }, tabs => {


    console.log( "...." );

} );

