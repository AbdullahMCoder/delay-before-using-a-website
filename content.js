async function code(){
    res = await fetch(chrome.runtime.getURL('popup.html'))
    html = await res.text()

    oldUrl = ''
    while(true){
        if(oldUrl!=document.URL){
            oldUrl = document.URL
            container = document.createElement('div')
            container.id = 'extensionContainer'
            container.innerHTML = html  
            document.body.appendChild(container)

            script = document.createElement('script')
            script.src = chrome.runtime.getURL('countDown.js')
            document.body.append(script)
        }
        await new Promise(resolve => setTimeout(resolve,100))
    }
    
}
code()