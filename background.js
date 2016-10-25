var contextTypes = [
        "selection",
        "page",
        "image",
        "link"
    ];
for(var i=0;i<5;i++){
    var contextMenuOptions = {
    "id" : contextTypes[i],
    "title" : "Share On %s Twitter",
    "contexts" : contextTypes[i];
}
}


chrome.contextMenus.create(contextMenuOptions);

chrome.contextMenus.onClicked.addListener(function(clickData){
    alert(clickData.menuItemId);
    var tabObject = {
        "url" : "https://twitter.com/intent/tweet?text="+clickData.selectionText
    }
    chrome.tabs.create(tabObject,function(tab){
        alert(tab.id);
    })
})