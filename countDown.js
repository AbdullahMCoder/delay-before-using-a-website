async function initateCount(){
    element = document.querySelector("#textt")
    overflow = document.querySelector('body').style.overflow

    for(let x=60;x>=1;x--){ 
        document.querySelector('body').style.overflow = 'hidden'
        element.textContent = x
        if(!document.hasFocus()){
            x++
        }
        await new Promise(resolve => setTimeout(resolve,1000))
    }
    document.querySelector('#extensionContainer').remove()
    document.querySelector('body').style.overflow = overflow
}

initateCount()
