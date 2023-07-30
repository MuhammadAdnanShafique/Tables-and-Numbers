let counter = 0;
let element = document.getElementById('printTables');
let element1 = document.getElementById('printCounter');

function a() { 
    element1.innerHTML=counter =' '
    element.innerHTML=counter =' '
    for (let index = 1; index <11; index++) {
        element.innerHTML+="2 x " + index + " = " + 2*index + "<br>";

    }
}
function b(isdp) { 
    element1.innerHTML=counter =' '
    element.innerHTML=counter =' '
    for (let index = 1; index <11; index++) {
        element.innerHTML+= isdp+" x " + index + " = " + isdp*index + "<br>";
        counter++
    }
}

function add() {
    counter++
    element1.innerHTML=' '
    element1.innerHTML=counter;
}
function save() {
    // element.innerHTML=' '
    element.innerHTML=counter
}
function subtraction() {
    counter--
    element1.innerHTML=counter;
}
function OddEven() {
    // add()
    if (counter%2==0)
    {element.innerHTML="Even"}
    else
    {element.innerHTML="Odd"}
}
function reset() {
    counter=' ';
    element1.innerHTML=' '
    element.innerHTML=' '
}
function odd() {
    element1.innerHTML=' '
    element.innerHTML=' '
    for (let index = 1; index < 101; index+=2) {
        element.innerHTML += index + " "
    }
}
function even() {
    element1.innerHTML=' '
    element.innerHTML=' '
    for (let index = 0; index < 100; index+=2) {
        element.innerHTML += index + " "
    }
}
function square() {
    // element1.innerHTML=' '
    element.innerHTML=' '
    for (let index = 1; index < 11; index++) {
        element.innerHTML +=index + " x " + index + " = " + index*index+ ("<br>")
    }
}