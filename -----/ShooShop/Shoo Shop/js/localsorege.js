class Localsorege {

    constructor() {
        this.keyName = "products";
        // products = this.products
        // pushProduct = this.pushProduct



    }
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];


    }

    putProducts(anything) {
        // let products = []
        let products = this.getProducts()
        let pushProduct = false;
        const index = products.indexOf(anything);

        if (index === -1) {
            products.push(anything);
            pushProduct = true;
            // for (let elem of elements) {
            // elem.querySelector("i").classList.toggle("mystyle")}

        } else {
            products.splice(index, 1);
        }


        // products.push(anything);

        localStorage.setItem(this.keyName, JSON.stringify(products))


        return { pushProduct, products }
    }
}

let localsore = new Localsorege();



// localsore.putProducts("el23")
let elements = document.querySelectorAll('#row button')
// let price = document.querySelectorAll('#row a')
// let price = elements.closest("div[.text-cente]")
// console.log(elements[0].innerHTML)

let clicker 
for (let elem of elements) {
    elem.addEventListener("click", function () {

        clicker = elem
        elem.querySelector("i").classList.toggle("mystyle")
        let price = elem.closest("div")
        // price = elem.closest("div")
        let pric = price.parentElement
        let name
        name = pric.querySelector(".card-body h4 a")
        pric = pric.querySelector(".card-body h4+p")
        // name.classList.add("mystyle")
        console.log(name.innerHTML)
        // console.log(pric.innerHTML)
        const regex = / MDL/i;
        let remov = pric.innerHTML.replace(regex, "")
        // console.log(pric.innerHTML)
        console.log(remov)

        let final = `{"Name":"${name.innerHTML}","Price":${remov}}`

        let productsStore = localsore.getProducts()
        let hauMach = productsStore.length
        // let hauMa = Object.keys(productsStore["products"]).length
        var hadClass = clicker;

        // after фильтр обновляется
        if (hadClass)
        clicker.classList.add('mystyle');




    localsore.putProducts(final)
    console.log(final)
    // let uan = 1
    // while (uan == 1){
    //     uan ++
    //     document.querySelector(".nav-shop__circle").innerHTML = 1

    // }
    let val = localStorage.getItem("products")
    let row = JSON.parse(val)
    let len = row
    for (let el of row) {
        let sameName = el.Name
        let om = typeof new String(el)
        console.log(om)
        console.log(el)
    }
    console.log(row)


    document.querySelector(".nav-shop__circle").innerHTML = row.length

    // console.log(productsStore.length)
})
    //  elem.addEventListener("click", function(){
    //     for (let elem of price) {
    //         console.log(elem)
    //     }
    //  })
}
//   for (let index = 0; index = price.length; index++) {
//     let element = price[0];
//     console.log(element)

// }
// for (let elem of price) {
//     elements.addEventListener("click", function(){
//         console.log(elem) 
// localsore.putProducts("el23")
//    console.log(price)


//     })
//   }
// console.log("ok")
//     addEventListener("click", function(){
// });
// localsore.putProducts("el32")
// localsore.putProducts("el33");
// localsore.putProducts("el44")
// console.log(localsore.putProducts.products)
// localsorege.putProducts()

// const a = localsore.getProducts();

// console.log(a);
// console.dir(document.getElementById("row"));

// localStorage.setItem("products ", "value")
// let v = localsore.getProducts()
// console.log(v.length)
// localStorage.clear();