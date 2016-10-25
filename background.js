var contextTypes = [
        "selection",
        "page",
        "image",
        "link"
    ];

for(var i=0;i<4;i++){

    var contextMenuOptions = {
        "id" : contextTypes[i],
        "title" : "Share this "+contextTypes[i]+" On Twitter",
        "contexts" : [contextTypes[i]]
        }
    chrome.contextMenus.create(contextMenuOptions);
}


chrome.contextMenus.onClicked.addListener(function(clickData,tab){
    var tabObject = {
        "url" : "https://twitter.com/intent/tweet?text=",
        "type":"panel",
        "width" : screen.availWidth/2,
        "height" : screen.availHeight/2
        }
    if(clickData.menuItemId==="selection"){
        tabObject.url = tabObject.url+encodeURIComponent(clickData.selectionText);
    }
    else if(clickData.menuItemId==="image"){
        tabObject.url = tabObject.url+encodeURIComponent(clickData.srcUrl);
    } 
    else if(clickData.menuItemId==="link"){
        tabObject.url = tabObject.url+encodeURIComponent(clickData.linkUrl);
    }
    else if(clickData.menuItemId==="page"){
        tabObject.url = tabObject.url+encodeURIComponent(tab.title)+"&url="+encodeURIComponent(clickData.pageUrl);
    }
    chrome.windows.create(tabObject);

})