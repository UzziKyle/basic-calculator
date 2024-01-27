function getResult() {
    let userInput = getInput()
    let result = calculate(userInput)
    return result
}

function calculate(userInput) {
    if (userInput === "") {
        return 0
    }

    userInput = userInput.split(" ");
    let total = parseFloat(userInput[0]);

    for (let i = 1; i < userInput.length; i += 2) {
        let operator = userInput[i];
        let operand = parseFloat(userInput[i + 1]);

        switch (operator) {
            case '+':
                total += operand;
                break;
            case '-':
                total -= operand;
                break;
            case '*':
                total *= operand;
                break;
            case '/':
                if (operand !== 0) {
                    total /= operand;
                } else {
                    alert("Cannot divide by zero");
                    return "Error";
                }
                break;
            default:
                break;
        }
    }

    return total;
}

function getInput() {
    return $(".calculator__screen").val().trim()
}

$(document).ready(function(){
    let windowHeight = $(window).outerHeight(true)
    let headerHeight = $(".header").outerHeight(true)
    let footerHeight = $(".footer").outerHeight(true)

    $(".main").css("height", function(){
        let mainHeight =windowHeight - (headerHeight + footerHeight)
        return mainHeight
    })

    $(".calculator__button").click(function(){
        let userInput = $(this).text()

        if (userInput === "CLS") { 
            $(".calculator__screen").val("")
            return
        } 

        if (userInput === "=") {
            $(".calculator__screen").val(getResult())
            return
        }

        $(".calculator__screen").val(function(index, origVal){
            if ("/*-+".includes(userInput)) {
                return `${origVal} ${userInput} `
            }
            return origVal + userInput
        })
    })
})