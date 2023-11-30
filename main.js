var buyticket0 = document.getElementById("buyticket0");
var h1 = document.getElementById("buyticket0"); 

var buyTickeBtn1=document.getElementById("buyticket1");
var buyticket1=document.getElementById("buyticket1")

var buyTickeBtn2=document.getElementById("buyticket2");
var buyticket2=document.getElementById("buyticket2")

var buyTickeBtn3=document.getElementById("buyticket3");
var buyticket3=document.getElementById("buyticket3")

var  h2=document.getElementById("ticketPrice");
var price=document.getElementById("price")

// var selectedDestination = getSelectedDestination();
// var selectedDestinationPrice = object[selectedDestination];

var object={ 
buyticket0: "14.5 DT",
buyticket1: "25 DT",
buyticket2: "30 DT",
buyticket3:"45 DT"}

function button0() {
    setTimeout(function () {
        h1.style.backgroundColor = "white";
    }, 500);

    h1.style.backgroundColor = "green";
    buyticket0.textContent = "destination chosen";
    clicked = "green"
    
}

function button1() {
    setTimeout(function () {
        buyticket1.style.backgroundColor = "white";
    }, 500);

    buyticket1.style.backgroundColor = "darkred";
    buyticket1.textContent = "destination chosen";
    clicked = "darkred"
}
function button2() {
    setTimeout(function () {
        buyticket2.style.backgroundColor = "white";
    }, 500);

    buyticket2.style.backgroundColor = "darkblue";
    buyticket2.textContent = "destination chosen";
    clicked = "darkblue"
}

function button3() {
    setTimeout(function () {
        buyticket3.style.backgroundColor = "white";
    }, 500);

    buyticket3.style.backgroundColor = "darkorange";
    buyticket3.textContent = "destination chosen";
    clicked = "darkorange"
}


function getSelectedDestination() {
    if (clicked==="green"){
        return "14.5dt"
     
    } 
    if (clicked==="darkred")  {
        return "25dt"
    }
    if (clicked==="darkblue")  {
        return "30dt"
    }
    if (clicked==="darkorange")  {
        return "45dt"
    }
  }



function showprice(){
    setTimeout(function () {
        h2.style.backgroundColor = "white";
    }, 500);

  h2.style.backgroundColor = "darkslategray";
  h2.textContent = "Price is " + getSelectedDestination();
}