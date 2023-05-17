
chrome.contextMenus.create({
    id: "contextMenuItem",
    title: "Search for '%s' in ChatGPT",
    contexts: ["selection"],

});

chrome.contextMenus.onClicked.addListener( ( info, tab ) => {
    sendRequest(info);
});
function sendRequest(info) {
    try {
        fetch('http://localhost:3000/', {
            method: 'post',
            body: JSON.stringify({content: info.selectionText}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(r){
            return r.json();
        }).then(function(data){
            console.log(data);
        });
    } catch (error) {
        console.error('Error:', error);
    }

}
chrome.tabs.executeScript(
    null, {
        file: 'content_script.js'
    }
);

