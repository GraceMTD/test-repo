const contenu = document.querySelector('#teddies');
console.log('contenu')
fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(data => {
    console.log("In the promise foooo");
    console.log(data);
    console.log(data[1]);
    data.forEach(teddy =>{
        console.log(teddy._id);
        contenu.innerHTML += `<a href = "produit.html?id=${teddy._id}" class="col-12 col-md-6 col-xl-4">
        <div class="card mb-3 mt-3">
            <img src="${teddy.imageUrl}" class="card-img-top" alt="Photo du nournours">
            <div class="card-body l-4">
                <h2 class="card-title">${teddy.name}</h2>
                <p class="card-text h4">${teddy.description}</p>
                <p class="card-text card-price text-danger h4 col-4">${teddy.price} €
                </p>
                <button class="btn btn__panier btn-danger col-12" type="submit">Details</button>
            </div>
        </div>
        </a>` 
    })
    
     
})

//const lien = window.location.href;
//console.log(lien);

/*fetch('https://api.thecatapi.com/v1/images/search')
.then(res => res.json())
.then(data => img.src = data[0].url)*/

//ou On peut aussi faire une condition qui affiche une erreur, si si la requette ne fxnne.

/*
fetch("http://localhost:3000/api/teddies")
.then(res => {
    if(res.ok){
        res.json().then(data => {
            img.src = data[0].url
        })
    } else{
        console.log("ERREUR");
        document.getElementById('erreur').innerHTML = 'Erreur':('
    }
})
*/


let id1 = document.getElementById('id');

const msg = document.querySelector('.msg');
//console.log(msg);

//Panier
//Formulaire
const myForm = document.querySelector('.my-form');
//console.log(myForm);
const firstName = document.querySelector('#validationCustom01');
//console.log(firstName);
const lastName = document.querySelector('#validationCustom02');
//console.log(lastName);
const userName =  document.querySelector('#validationCustomUsername');
//console.log(userName);
const city = document.querySelector('#validationCustom03');
//console.log(city);
const state = document.querySelector('#state');
//console.log(state);
const zip = document.querySelector('#zip');
//console.log(zip);
const checkbox = document.querySelector('.form-check-input');
//console.log(checkbox);
const btnForm = document.querySelector('.btn');
//console.log(btnForm);

/*myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    //Pour recupérer la valeur entre dans le champs
    //console.log(nameInput.value);
    if(firstName.value === '' || lastName.value === '' || userName.value ==='' || userName.value === '' || city.value === '' || state.value === '' || zip.value === ''){
        //alert('Please enter fields')
        msg.classList.add('error');
        msg.innerHTML = 'Replissez les champs SVP';

        //Pour faire disparitre le msg et la class après 3sec.
        setTimeout(() => msg.remove(), 10000);
    }else{
        msg.classList.add('error');
        msg.innerHTML = 'Replissez les champs SVP';

        //clear fields.
        //nameInput.value = '';
        //emailInput.value = '';

    }
}*/