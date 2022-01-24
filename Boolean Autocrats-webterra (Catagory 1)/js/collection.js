import db from './firebase.js';
function fetch(cats){
    db.database().ref('/').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let image1 = ChildSnapshot.val().image1
                let name = ChildSnapshot.val().name
                let price = ChildSnapshot.val().price
                let id = ChildSnapshot.val().id
                let cat = ChildSnapshot.val().category
                if(cat == cats){
                    main(image1,name,price,id,cats)
                }
                

            }    
        );
    })
    
}
var fea_products='';
var catc = ['interior','exterior','gifting','summer'];
function main(image1,name,price,id,cats)
{
    
    fea_products = "<div class='swiper-slide box' style='width:30rem'><div class='icons'><button class='btn' onclick='lalala(this.value);' value="+id+" style='width:50%;'> <i class='fas fa-shopping-cart'></i></button></div><div class='image'><img class='images' src="+image1+" alt="+id+"></div><div class='content'><h3>"+name+"</h3><div class='price'>"+"₹"+price+"</div><button onclick='main("+id+")' class='btn'>Buy Now</button></div></div>"
    
    document.getElementById(cats).innerHTML += fea_products


}

    for(var i=0;i<catc.length;i++)
    {
        fetch(catc[i])
    }





