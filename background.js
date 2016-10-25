var contextTypes = [
        "selection",
        "page",
        "image",
        "link"
    ];
for(var i=0;i<4;i++){
    var c = contextTypes[i];
    var contextMenuOptions = {
        "id" : c,
        "title" : "Share %s On Twitter",
        "contexts" : [c]
        }
    chrome.contextMenus.create(contextMenuOptions);
}



chrome.contextMenus.onClicked.addListener(function(clickData){
    //alert(clickData.menuItemId);
    if(clickData.menuItemId==="selection"){
        var tabObject = {
        "url" : "https://twitter.com/intent/tweet?text="+clickData.selectionText
        }
        chrome.tabs.create(tabObject,function(tab){
             alert(tab.id);
         })
    }
    else if(clickData.menuItemId==="image"){
        var tabObject = {
        "url" : "https://twitter.com/intent/tweet?text="+clickData.selectionText
        }
        chrome.tabs.create(tabObject,function(tab){
             alert(tab.id);
         })
    } 
    else if(clickData.menuItemId==="link"){
        var tabObject = {
        "url" : "https://twitter.com/intent/tweet?url="+clickData.linkUrl
        }
        chrome.tabs.create(tabObject,function(tab){
             alert(tab.id);
         })
    }
    else if(clickData.menuItemId==="page"){
        var tabObject = {
        "url" : "https://twitter.com/intent/tweet?text="+clickData.selectionText
        }
        chrome.tabs.create(tabObject,function(tab){
             alert(tab.id);
         })
    }
    
})