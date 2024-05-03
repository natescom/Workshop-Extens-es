const dashboard = document.getElementById("dashboard-content")

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    dashboard.style.backgroundImage = `url(${request.data.url})`;
})
