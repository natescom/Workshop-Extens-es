let urlImg = "";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request?.action === "setUrl"){
        urlImg = request.data.url
    }
    if(request?.action === "getUrl"){
        sendResponse(urlImg)
    }
})