const teddies = JSON.parse(localStorage.getItem("teddies"));
console.log(teddies);

const list = document.querySelector('#article-liste');
        teddies.forEach(teddy=> {
            list.innerHTML +=`
            <tr>
                <td>${teddy.title}</td>
                <td><img class="photo-panier" src="${teddy.image}" alt="Poto de l'article"></td>
                <td>${teddy.color}</td>
                <td>${teddy.price}€</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>            
            </tr>
            `
            
            
        });











       
// class Article{
//     constructor(image, title, color, prix){
//         this.image = image;
//         this.title = title;
//         this.color = color;
//         this.prix = prix;
//     }
// }

// // Pour afficher l'article dans le panier
// class AfficherLArticle{
//     static displayTeddies(){       
        
//         const teddies = Store.getTeddies;

//         teddies.forEach((Teddy) => AfficherLArticle.addArticleList(teddy)); 
//     } 

//     static addArticleList(teddy){
//         const produit = document.querySelector('#article-liste');
//         console.log(produit);
//         const row = document.createElement('tr');
//         //console.log(row);
//         row.innerHTML = `
//         <td>${teddy.photo}</td>
//         <td>${teddy.image}</td>
//         <td>${teddy.color}</td>
//         <td>${teddy.price}</td>
//         <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
//         `;
//         produit.appendChild(row);
//     }

//     static deleteArticle(el) {
//         if(el.classList.contains('delete')){
//             el.parentElement.parentElement.remove();            
//         }
//     }
// }

// //LocalStorage
// class Store{
//     static getTeddies(){
//         let teddies;
//         if(localStorage.getItem('teddies') ===null){
//             teddies =[];
//         }else{
//             teddies = JSON.parse(localStorage.getItem('teddies'));
//         }
//         return teddies;
//     }

//     static addArticle(teddy){
//         const teddies = Store.getTeddies();
//         teddies.push(teddy);

//         localStorage.setItem('teddies', JSON.stringify(teddies));
//     }
// }
        

