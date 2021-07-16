const nounours = document.getElementById('container');
console.log(nounours);
const url = window.location.href;
// console.log(url);
const id = url.split('=')[1];
console.log(id);
fetch(`http://localhost:3000/api/teddies/${id}`) 
 .then(response => response.json())
 .then(doudou => {
    console.log(doudou);
       nounours.innerHTML += `<div class="card mb-10" >
           <div class="row g-0">
           <div class="col-md-6">
           <img src="${doudou.imageUrl}" class="img-fluid rounded-start" alt="Phote de nournours">
           </div>
             <div class="col-md-6">
                <div class="card-body">
                 <h3 class="card-title">${doudou.name}</h3>
                 <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Couleurs</label>
                    <select class="form-select" id="inputGroupSelect01">
                      <option id="choixdelacouleur" class="CouleurduNournour" selected>Choisissez une couleur au choix...</option> 
                    </select>
                </div>
                 <p class="card-text h4">${doudou.description}</p>
                 <p class="card-text text-danger h3">${doudou.price/100} €</p>
                 <button class="btn btn__panier btn-danger " type="submit">Ajouter au panier</button>
               </div>
             </div>
           </div>
        </div>`
        
      let couleur = document.querySelector('select');   
      doudou.colors.forEach(color => {
        couleur.innerHTML += `<option value="${color}">${color}</option>`
      });

      // function ColorValue(y){
      //   let colorSelect = couleur[0];        
      //   couleurFinale = y.value;
      //   return couleurFinale;
      // }
      // ColorValue();

      // console.log(ColorValue);


      let erreur = document.getElementsByClassName('erreur');
      console.log(erreur);
      let couleurArticle = document.getElementsByClassName('couleurduproduit');
      console.log(couleurArticle);
      let btn = document.getElementsByClassName('btn__panier');

      //class constructor Article
      // class Teddy{
      //   constructor(title, image,color, price){
      //       this.title = title;
      //       this.image = image;
      //       this.color = color;
      //       this.price = price;
      //   }
      // }
      // console.log(btn);  

      document.querySelector('.btn__panier').addEventListener('click', (e) =>{
        e.preventDefault();
        
        const teddies = [
            {
              image: doudou.imageUrl,
              title: doudou.name,
              color: couleur.value,
              price: doudou.price/100  
            }
          ]; 
          //console.log(teddies);  
          localStorage.setItem("teddies", JSON.stringify(teddies));  
        
          
              
      })

       
    // console.log(teddies);  
    // localStorage.setItem("teddies", JSON.stringify(teddies));  
    // const teddies = [
    //   {
    //     image: doudou.imageUrl,
    //     title: doudou.name,
    //     color: couleur[0].value,
    //     price: doudou.price  
    //   }
    // ]; 
    // console.log(teddies);
    // if(teddies.title==='', teddies.image === ""||teddies.price===''||teddies.color===''){
    //   alert('Stock vide, essayez ultérieurement')
    // }else{
    //   const teddy = new Teddy( Teddy.title, Teddy.image, Teddy.price, Teddy.color); 
    // }

    // //Pour Ajouter le produit à l'interface client
    // AfficherLArticle.addArticleList(Teddy);

    // //Pour ajouter l'article dans le localStorage
    // Store.addArticle(Teddy);

      
    //   function ValeurDelaCouleur(e){
    //     e.preventDefault();
    //     //let valeurCouleur = couleur.value;
    //     if (couleur ==='Choisissez une couleur au choix...'){
    //       erreur.classList.add('error');
    //       erreur.innerHTML = '';
    //     }else{
    //       //const  couleurDuProduit= document.createElement('li');
    //       //Pour créer un élément dans le html
    //       const li = document.createElement('li');
    //     //Ici nous affectons les valeur recuperer des inputs à li
    //     li.appendChild(document.createTextNode(`${coleur.value}`));
    //     //Ici nous les envoyons pour modifier le html.
    //     couleurArticle.appendChild(li);

    //     //clear fields.
    //     couleur.value = 'Choisissez une couleur au choix...';
    //     }
    //   }
    
      

    // couleurSetelected.addEventListener('select', (e) => {
    //   return color[0]        
    // });

}); 
   
    
    

    
      //ValeurDelaCouleur();

    // let couleurDuProduit = couleur.value;
    // console.log(couleurDuProduit);
    //const btnPanier = document.getElementsByClassName("btn__panier");
    //console.log(btnPanier);

