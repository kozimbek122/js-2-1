

const body = document.querySelector('body') 
const btn1 = document.querySelector('#btn1') 
const btn2 = document.querySelector('#btn2') 

    
function lightmode(){
    let badybg = body.style.backgroundColor = 'white'
    let textcolor = text.style.color = 'black'
    return badybg || textcolor
}

function darkmode(){
    let badybg = body.style.backgroundColor = 'black'
    let textcolor = text.style.color = 'white'
    return badybg || textcolor
}
