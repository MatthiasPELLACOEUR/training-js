let buttons = document.getElementsByClassName('button')
let result = document.getElementById('result')
let acButton = document.getElementById('AC')


// buttons.addEventListener('click', function(e){
//     console.log(buttons.value);
    
// })

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e){
        // console.log(e.target.textContent);
        let nbTwo = document.createTextNode(e.target.textContent)
        if(result.textContent == '0'){
            result.textContent = e.target.textContent 
            acButton.textContent = "C"
        }
        else if(result.textContent !== '0') {
            result.appendChild(nbTwo)
        }
    })
}

