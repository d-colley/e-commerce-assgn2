var cartItems = []
 

function myRandom(){
    Math.floor(Math.random() * 9999) + 1;
}


function addItemCart(){
    var name = document.getElementById('prdname').value
    var price = document.getElementById('prdprice').value
    var qty = document.getElementById('prdqty').value

    var item = {
        name:name,
        price:price,
        qty:qty
    }
    cartItems.push(item)

    var prdit =(Math.floor(Math.random() * 9999) + 1).toString();
    //var x = prdit.toString();
    alert(prdit)
    window.localStorage.setItem(prdit,JSON.stringify(item))
}

function displayCart(){
    var cartItem = JSON.parse(window.localStorage.getItem('product1'))

    document.getElementById('itemName').value = cartItem.name;
    document.getElementById('itemPrice').value = cartItem.price;
    document.getElementById('itemQTY').value = cartItem.qty;
}


