
/****************************************************************************************************
 * Script para publicar ofertas
 * postOffers() consulta al usuario cuantas ofertas quiere publicar y agrega un titulo al html.
 * fillCard() consulta al usuario las caracteristicas de los productos a publicar:
 *  -Titulo
 *  -Descripcion
 *  -Precio
 *  -URL de imagen
 * calcula el precio con un descuento fijo del 20%
 * crea un nuevo objeto del tipo Producto con el metodo createCard()
 * Este metodo crea en el html una card con las caracteristicas del producto
 * 
 */

let offersAmount = 0;
let products = []

function postOffers() {
    offersAmount = parseInt(prompt("Ingrese el numero de productos que desea publicar (Maximo 3)"));
    if (!isNaN(offersAmount) && (offersAmount >= 1 && offersAmount <= 3)) {
        document.write(`<h1 class="header">OFERTAS DE TECNOLOGIA SOLO POR ESTA SEMANA!!</h1>`);
        fillCard();

    } else {
        alert("Error, debe ingresar un numero entero entre 1 y 3")
        postOffers();
    }
}


class Product {
    constructor(title, description, price, picture) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.picture = picture;
        this.discounPrice = Math.trunc(price * 0.8);
    }
    createCard() {
        let url= "./img/default.jpg"
        if(this.picture!==""){
            url = this.picture;
        }
        document.write(`<div class="card col-4 cardContainer zoom">
                            <img src="${url}" alt="default">
                            <div class="card-body">
                                <h2 class="title">${this.title}</h2>
                                <h4 class="description">${this.description}</h4>
                                <h4 class="regularPrice" >$ ${this.price}</h4>
                                <h4 class="discount">20%OFF</h4>
                                <h3 class="price" >$ ${this.discounPrice}</h3>
                            </div>
                        </div>`
        )
    }
}


function fillCard() {
    for (let i = 1; i <= offersAmount; i++) {
        const titulo = prompt(`Ingrese el nombre del producto ${i}`);
        const descripcion = prompt(`Ingrese descripcion del producto ${i}`);
        const precio = parseInt(prompt(`Ingrese precio SIN DESCUENTO del producto ${i}`));
        const picture = prompt("Ingrese url de la imagen\nSi no tiene una imagen para agregar, simplemente continue con ACEPTAR");
        let item = new Product(titulo, descripcion, precio, picture);
        products.push(item);
    }
    for( const product of products){
        console.log(product)
        product.createCard();
    }
}


postOffers();

