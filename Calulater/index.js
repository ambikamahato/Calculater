const buttonsList = document.querySelectorAll(".grid-container  button");//buttonList is an array of HTML buttonsS
const outputContainer = document.getElementById("input");
const clearButton = document.getElementById("clear");


function onButtonClick(event){ // focused on Targeted Button
    let target = event.target;
    // console.log(target.innerText); // for inner operations = 3,4,6,7-,=,+ etc
    outputContainer.value = outputContainer.value + target.innerText; //(exiting value + current value)
    console.log("Clicked on button");
}

// register function for all the button clicks
for(let i = 0; i< buttonsList.length; i++){
    buttonsList[i].addEventListener("click", onButtonClick);
}


function onClear(){ 
    outputContainer.value = "";
}

clearButton.addEventListener("click", onClear);

function onButtonClick(event){
    let target = event.target;
    let currentValue = target.innerText; //current value 564* = 564+
    let enteredValue = outputContainer.value;//for checked 

    const operators = ["+", "-", "*", "/"];// list of Operaturs
    let lastKey  = enteredValue[enteredValue.length - 1];

    if(operators.includes(lastKey) && operators.includes(currentValue)){
        let newExp = enteredValue.slice(0, enteredValue.length- 1) + currentValue;
        outputContainer.value = newExp;
    }
    else if(currentValue === "=" && enteredValue === ""){
        alert("Enter some data")
        return;
    }
    else if(currentValue === "="){
        const result = eval(enteredValue); 
        outputContainer.value = result;
    }else {
        outputContainer.value = outputContainer.value + currentValue;
    }
}


document.body.addEventListener("keyup", (e) => {
    console.log(e);
})

