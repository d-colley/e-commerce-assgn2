  
var allItems = [];
//var totalCart = "empty";

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

//custom
function addItemToCart(choice)
{
    //parse any previously stored JSON in allItems
    var existingItems = JSON.parse(localStorage.getItem("allItems"));
    if(existingItems == null) existingItems = [];

    var name = $("#" + choice + "_name").text();
    var price = $("#" + choice + "_price").text();
    var price2 = price.replace(/\,/g, '');
    var price2 = parseInt((price2.replace(/\$/g, '')),10);

    console.log(name);
    console.log(price);
    console.log(price2);

    var item = {
        name:name,
        price:price2
    };
    console.log(JSON.stringify(item));

    localStorage.setItem("item", JSON.stringify(item));

    //Save allEntries back to localstorage
    existingItems.push(item);
    localStorage.setItem("allItems", JSON.stringify(existingItems));
    //var stringified = JSON.stringify(item);
    //localStorage.setItem(totalCart, stringified);
    productSelect();
    //setTimeout(function(){ location.reload(); }, 3000);

}

function getCart()
{
    var items = localStorage.getItem("allItems");
    var items = JSON.parse(items);
    var total_price = 0;


    for(var i = 0; i < items.length; i++)
    {
        var obj = items[i];
        console.log(obj.name);
        console.log(obj.price);

        total_price = total_price + obj.price;
        console.log(total_price);

        $('#cartContent').append('<a href="#" class="cart_item">' + " - " + obj.name + '<br>$' + obj.price + '</a>');
    }

    $('#cart_total').append('<div href="#" class="">' + "Total: $" + total_price + '.00</div>');


}

function clearCart()
{
    localStorage.clear();
    location.reload();
}

//end custom
function displayCart(){
    var cartItem = JSON.parse(window.localStorage.getItem('product1'))

    document.getElementById('itemName').value = cartItem.name;
    document.getElementById('itemPrice').value = cartItem.price;
    document.getElementById('itemQTY').value = cartItem.qty;
}