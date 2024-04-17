//header switch de page au click mis a direct dans le html

// document.querySelector('#cart').addEventListener('click',
// function (){
//     window.location.assign('./cartF.html')
// })

// document.querySelector('#books').addEventListener('click',
// function (){
//     window.location.assign('./bookingsF.html')
// })

// document.querySelector('#tickethack').addEventListener('click',
// function (){
//     window.location.assign('./index.html')
// })

// au click bouton book dans accueil GET / trip 
document.querySelector('#btnbook').addEventListener('click',function (){
    const getTrip = {
        departure:document.querySelector('#departure').value,
        arrival:document.querySelector('#arrival').value,
        date:document.querySelector('#date').value,
        price:document.querySelector('#price').value
}
fetch('http://localhost:3000/cart/getTrip'),{
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
}})

