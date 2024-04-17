
const btnSearch = document.querySelector(".btn");
const date = document.querySelector("#date");
const ticketthat = document.querySelector("#logo");
const cart = document.querySelector("#cart");
const booking = document.querySelector("#bookings");
const voyage = document.querySelector(".voyage");

departure.addEventListener("click", function() {})
arrival.addEventListener("click", function() {})
date.addEventListener("click", function() {})

btnSearch.addEventListener("click", function() {

    const departure = document.querySelector("#departure");
    const arrival = document.querySelector("#arrival");

    const trajet = {
        departure: departure.value,
        arrival: arrival.value,
        date: date.value
    };

    if (!departure.value && !arrival.value){
        voyage.innerHTML = 
        `<div>
            <div class="image">
                <img src="./images/notfound.png" alt="notfound">
            </div>
            <div class="separation"></div>
            <p>no trip found.</p>
        </div>`
    } else {
            
    fetch('http://localhost:3000/trips', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify( trajet ),
	}).then(response => response.json())
	  .then(data => {
          
            voyage.innerHTML ="";
    for (const objet of data.voyage) {
        
        const objetKey = Object.values(objet);
      
     
        voyage.innerHTML += 
        `<div id="allee">
            <ul>
                <li id="${objetKey[0]}">${objetKey[1]} > ${objetKey[2]}${objetKey[3]}${objetKey[4]} <button class="voir">Add</button></li>
            </ul>
        </div>`
       
       
        for (let i = 0; i < document.querySelectorAll('.voir').length; i++) {
            document.querySelectorAll('.voir')[i].addEventListener('click',
              function () {
                let idElement = this.parentNode.id;
                
                fetch(`http://localhost:3000/tickethack/cart/`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( {id:idElement} ),
                }).then(response => response.json())
                .then(data => {
                console.log(data);
                })
                window.location.assign("./cartF.html");            
            });
        }
    }
})
    }
    

})