Calculator = function () {
    this.value = 0;
}

Calculator.prototype.add = function (number) {
    if (typeof (number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
}


/*function addition(numOne, numTwo) {
    if (typeof (numOne) == "number" && typeof (numTwo) == "number") {
        return numOne + numTwo;
    } else {
        alert("Error!");
    
    }
}*/

function = whatCanIDrink(age){
    if (age <= 0) { 
    return "Sorry, I can't tell what drink because that age is incorrect!";
    }
    if (age < 14) {
        return "Drink Toddy";
    }
    else if (age < 18 && >= 14) {
        return "Drink Coke";
    }
    else if (age < 21 && >= 18) {
        return "Drink Beer";
    }
    if (age < 130) {
        "Drink Whisky";
    } else {
        return "Sorry, I can't tell what drink because that age is incorrect!";
    }
}