// let raw = localStorage.getItem("products")
// console.log(JSON.parse(raw))
let val = localStorage.getItem("products")
let row = JSON.parse(val)
console.log(Object.values(row))
// запись
// foo = ['bar1', 'bar2', 'bar3'];
// localStorage.foo = JSON.stringify(foo);

// // чтение
// foo = localStorage.foo ? JSON.parse(localStorage.foo) : [];
// console.log(foo)
for (let el of row) {
    let sameName = el.Name
    let om = new String(el)
    // console.log(om)
    let SomeProduct = JSON.parse(el)
    console.log(SomeProduct.Name, SomeProduct.Price)
    let tbody = document.querySelector(`#tbody`)
    console.log(tbody);
    // console.log(el);
    let val = localStorage.getItem("products")
        let row = JSON.parse(val)
        let len = row
        for (let el of row) {
            let sameName = el.Name
            let om = typeof new String(el)
            console.log(om)
            console.log(el)
        }
        console.log(row.length)


        document.querySelector(".nav-shop__circle").innerHTML = row.length
       

    $(function () {
        let nom =1
        
        

        $(`tbody`).prepend(`<tr><td><div class="media"><div class="media-body"><p>${SomeProduct.Name}</p></div></div></td><td><h5>${SomeProduct.Price} MDL</h5></td><td><div class="product_count"><input type="text" name="qty" id="sst${nom}" maxlength="12" value="1" title="Quantity:" class="input-text qty"><button onclick=" var result = document.getElementById('sst${nom}'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button><button onclick="var result = document.getElementById('sst${nom}'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;" class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button></div></td><td><h5>$720.00</h5></td></tr>`);
        
    });
    





}
{ }
// console.log(row)

// class Shopping {
//     constructor() {
//         this.keyName = "products";
//         // products = this.products
//         // pushProduct = this.pushProduct



//     }
//     getProducts() {
//         const productsLocalStorage = localStorage.getItem(this.keyName);
//         if (productsLocalStorage !== null) {
//             return JSON.parse(productsLocalStorage);
//         }
//         return [];


//     }
// }

// let shopcls = new Shopping

// let a = shopcls.getProducts();
// console.log(a)