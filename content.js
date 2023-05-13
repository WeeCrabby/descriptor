/*
let selectedText;
document.addEventListener('mouseup', function(event) {
    selectedText = window.getSelection().toString();
    chrome.runtime.sendMessage({text: selectedText}).then(r => console.log(r));

});
*/
//send selected text to background.js when context menu item is clicked
chrome.contextMenus.onClicked.addListener( ( info, tab ) => {
    if( info.menuItemId === "contextMenuItem" && info.selectionText != null ) {
        chrome.runtime.sendMessage({text: info.selectionText}).then(r => console.log(r));
    }
});

