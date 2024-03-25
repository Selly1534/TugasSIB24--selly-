let endpoint = 'https://api.storerestapi.com/products'
let product = document.getElementById('product')

let datas = fetch(endpoint)
.then((res)=> res.json())
.then((response) => {

    
    response.data.forEach(element => {
        
        let elemen = document.createElement('div')
        product.innerHTML = '<div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"><div class="my-3 py-3" id="product"><h2 class="display-5"><title>"https://api.storerestapi.com/products"</title></h2><p class="lead">And an even wittier subheading.</p></div><div class="bg-body-tertiary shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div></div>'
        

        product.appendChild(elemen)
        
         console.log(element)
    });
})

console.log(datas);