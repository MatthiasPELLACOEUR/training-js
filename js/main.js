let buttons = document.getElementsByClassName('button')
let result = document.getElementById('result')
let acButton = document.getElementById('AC')
let btnOperations = document.getElementsByClassName('button-operations')
let inputButton = document.getElementsByTagName('button')
let operation = ""


function getSum(x, y) {
    var r = x + y
    console.log(r);
    
}
function getDifference(x, y) {
    var r = x - y
    console.log(r);
    
}
function getProduct(x, y) {
    var r = x * y
    console.log(r);
    
}
function getQuotient(x, y) {
    var r = x / y
    console.log(r);
    
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) =>{
        // console.log(e.target.textContent);
        let nbTwo = document.createTextNode(e.target.textContent)
        

        if(result.textContent == '0' && e.target.textContent >= '1'){
            result.textContent = e.target.textContent
            acButton.textContent = "C"
        }
        else if(result.textContent !== '0') {
            result.appendChild(nbTwo)
        }
    })
}
for (var i = 0; i < inputButton.length; i++) {
    inputButton[i].addEventListener('click', (e) =>{
        // console.log(e.target.classList[0]);

        
        switch (e.target.classList[0]) {
            case 'numbers': 
            break;
            case 'button-operations':
                console.log(e.target.textContent);
                
                switch (e.target.textContent){
                    case '/':
                        var x = parseInt(result.textContent, 10)
                        operation = '/'
                        getQuotient(x, y)
                    break

                    case '*':
                        var x = parseInt(result.textContent, 10)
                        operation = '*'

                    break

                    case '+':
                        var x = parseInt(result.textContent, 10)
                        operation = '+'

                    break

                    case '-':
                        var x = parseInt(result.textContent, 10)
                        operation = '-'

                    break

                    case '=':
                        var y = parseInt(result.textContent, 10)
                        switch (operation){
                            case '+':
                                getSum(x, y) 
                            break
                        }
                        
                    break
                }         
                
                if(e.target.textContent == '+'){
                    var x = parseInt(result.textContent, 10)
                    console.log(x)
                    result.textContent = "0"
                }else if(e.target.textContent == '='){
                    var y = parseInt(result.textContent, 10)
                    console.log(y);
                }
                getSum();
                
               
                break;
            default:
                console.log("t'es nul");
        }

    })
}

