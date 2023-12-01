var  img1= document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var img4= document.getElementById('img4')
var show =document.getElementById('show')
var ticketPriceElement=document.getElementById("ticketPrice")







function disimg() {

    img1.style.display='block'
    setTimeout(function() 
    {
    img1.style.display= 'none'
    },8000)
  }


  function disimgg() {
    img2.style.display = 'block'
    setTimeout(function() {
img2.style.display = 'none'
    },8000)
  }

  function disimggg() {
    img3.style.display = 'block'
    setTimeout(function() {
img3.style.display = 'none'
    },8000)
  }
  function disimgggg() {
    img4.style.display = 'block'
    setTimeout(function() {
img4.style.display = 'none'
    },8000)
  }

  function showRandomTickets() {
    var randomTickets=Math.floor(Math.random()*100000)
    ticketPriceElement.textContent="Ticket Number: " + randomTickets
}

function redirect() {
  var destinationURL='confirmation.html'
  window.location.href=destinationURL
}