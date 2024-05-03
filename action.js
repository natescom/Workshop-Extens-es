const btnAplicar = document.getElementById("btnAplicar");
const btnRestaurar = document.getElementById("btnRestaurar");
const inputUrl = document.getElementById("inputUrl")

let urlImg;

btnRestaurar.onclick = () => {
    urlImg = "https://i.imgur.com/ugShl.png"
    inputUrl.value = urlImg;
}

btnAplicar.onclick = () => {
    
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
        let idDaPagina = tabs[0].id;
        chrome.tabs.sendMessage(idDaPagina, {
            data: {
                url: urlImg
            }
        })
        // DUVIDA: POR QUE NÃO USAR O chrome.runtime.senMessage() aqui?
        // RESPOSTA: https://developer.chrome.com/docs/extensions/reference/api/runtime?hl=pt-br#method-sendMessage
    })

    chrome.runtime.sendMessage({
        action: "setUrl",
        data: {url: urlImg}
    })
}

inputUrl.onchange = () => {
    urlImg = inputUrl.value
}

chrome.runtime.sendMessage({action: "getUrl"}, function(response){
    urlImg = response;
    inputUrl.value = urlImg;
})