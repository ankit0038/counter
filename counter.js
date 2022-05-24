function addCounterNode(id) {
    const counterDiv = document.createElement("div");
    counterDiv.setAttribute("class", "counter");

    const innerCounterDivLeft = document.createElement("div");
    const btnSubtract = document.createElement("button");
    btnSubtract.setAttribute("onclick","decreaseCounter()");
    const btnSubtractTxt = document.createTextNode("Sub");
    btnSubtract.appendChild(btnSubtractTxt);
    innerCounterDivLeft.appendChild(btnSubtract);
    
    const innerCounterDivMid = document.createElement("div");
    const counterTxt = document.createTextNode("0");
    innerCounterDivMid.appendChild(counterTxt);
    
    const innerCounterDivRight = document.createElement("div");
    const btnAdd = document.createElement("button");
    const btnAddTxt = document.createTextNode("add");
    btnAdd.setAttribute("onclick","increaseCounter()");
    btnAdd.appendChild(btnAddTxt);
    innerCounterDivRight.appendChild(btnAdd);

    counterDiv.appendChild(innerCounterDivLeft);
    counterDiv.appendChild(innerCounterDivMid);
    counterDiv.appendChild(innerCounterDivRight);

    let divCounters = document.getElementById("div-counters");
    divCounters.appendChild(counterDiv);
    
}

function increaseCounter() {
    recalculateCounter("increase");
}

function decreaseCounter() {
    recalculateCounter("decrease");
}

function recalculateCounter(flag){
    const src = event.target;
    const counterNode = src.parentNode.parentNode.children[1];
    let countVal = parseInt(counterNode.innerText);
    if(flag=="increase")
        countVal += 1;
    else
        countVal -= 1;
    counterNode.innerText = countVal;
}

function onClickAddCounter() {
    addCounterNode();
}