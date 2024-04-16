const departure = document.querySelector("#departure");
const arrival = document.querySelector("#arrival");
const btnSearch = document.querySelector(".btn");
const date = document.querySelector("#date");
const ticketthat = document.querySelector("#logo");
const cart = document.querySelector("#cart");
const booking = document.querySelector("#bookings");
const voyage = document.querySelector(".voyage");

const tableau = [{"departure":"Paris",
              "arrival":"Lyon",
              "date":{"$date":"2024-04-16T08:43:53.356Z"},
              "price":148},
             {"departure":"Bruxelles",
              "arrival":"Marseille",
              "date":{"$date":"2024-04-16T08:45:49.731Z"},
              "price":140},
             {"departure":"Paris","arrival":"Lyon","date":{"$date":"2024-04-16T08:59:20.204Z"},"price":70},{"departure":"Marseille","arrival":"Bruxelles","date":{"$date":"2024-04-16T09:03:56.627Z"},"price":87}]

departure.addEventListener("click", function() {
    
})
arrival.addEventListener("click", function() {

})
date.addEventListener("click", function() {

})
btnSearch.addEventListener("click", function() {
  
   

    const trajet = {
        departure: departure.value,
        arrival: arrival.value,
        date: date.value
    };
    // fetch('http://localhost:3000/trips', {
	// 	method: 'POST',
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify({ trajet }),
	// }).then(response => response.json())
	//   .then(data => {
    //         console.log(data);
    // })
    voyage.innerHTML ="";
    for (const objet of tableau) {
        
        const objetKey = Object.values(objet);
        console.log(objetKey);
        voyage.innerHTML += 
        `<div id="allee">
            <ul>
                <li><span>${objetKey[0]} > ${objetKey[1]}</span><span> ${objetKey[2].$date}<span> ${objetKey[3]}</span> <button class="voir">Add</button></li>
            </ul>
        </div>`
        
    }
    const liLists = document.querySelectorAll("li");
    for (let i = 0; i < document.querySelectorAll('.voir').length; i++) {
        document.querySelectorAll('.voir')[i].addEventListener('click',
          function () {
            this.style.color = "red";
            //Appeler cartF.js 
          }
        );
      }
   
})