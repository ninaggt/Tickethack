//JE RECUP MA BASE DE DONNEE CART ET AFFICHE DANS UN NOUVELLE FENETRE TOUTES LES INFOS RECUP
fetch('http://localhost:3000/cart/cartSave').then(
    response => response.json())
    .then(data => {
        
        if(data.default == false ){
                const carteInfosFalse = document.querySelector('#cartInfos')
            return carteInfosFalse.innerHTML =`
            <div id="myCart"><p>No tickets in your cart.</p></div>
                <div id="result"><p>Why not plan a trip ?</p></div>
            `
        }else{
        document.querySelector('#myCart').innerHTML +=`<p>my cart</p>`
            data.allCart.map(cart =>{
            let departure = cart.departure;
            let arrival = cart.arrival;
            let hours = new Date(cart.date).getHours()
            let minutes = new Date(cart.date).getMinutes()
            let price = cart.price;
            let id = cart._id
            

            document.querySelector('#result').innerHTML += `
            <div class="cartTrip" id="${id}">
            <p><span>${departure} > ${arrival}</span></p>
            <p><span>${hours}:${minutes}</span></p>
            <p><span>${price}</span></p>
            <button class="btnx">✖</button>
            </div> `           
        }) 
        let price = 0;
        data.allCart.map(priceadd => {
            return price += priceadd.price
                    
        })
        
            document.querySelector('#result').innerHTML +=`
        <div class="bottommyCart">
        <p class="total">Total:${price}</p>
        <a class="purchase"href="/frontend/bookingsF.html" target="_blank" class="bouton-lien">purchase</a>
        </div>`

        let toutmesbouton = document.querySelectorAll('.btnx')
        
        for (let i=0; i<toutmesbouton.length; i++){
            toutmesbouton[i].addEventListener('click', function () {
                //console.log(this.parentNode.id)
                this.parentNode.remove();
                let idElement = this.parentNode.id
                console.log(idElement)
                fetch(`http://localhost:3000/cart/cartDelete/${idElement}`,{
                    method: 'DELETE'})
                .then(response => response.json()).then(data =>{console.log(data)})
    })}  
    }})
