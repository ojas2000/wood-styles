
import list from './brands.js';
import db from './firebase.js';

var fea_products = '';
var new_products1 = '';
var new_products2 = '';
function fetch(){
    db.database().ref('/').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let image1 = ChildSnapshot.val().image1
                let name = ChildSnapshot.val().name
                let price = ChildSnapshot.val().price
                let id = ChildSnapshot.val().id
                let cat = ChildSnapshot.val().cat
                
                main(image1,name,price,id,cat)

            }    
        );
    })
}
function main(image1,name,price,id,cat){




    fea_products = "<div class='swiper-slide box' style='width:10rem!important;'><div class='icons'><button class='btn' onclick='lalala(this.value);' value="+id+" style='width:50%;'> <i class='fas fa-shopping-cart'></i></button></div><div class='image'><img class='images' src="+image1+" alt="+id+"></div><div class='content'><h3>"+name+"</h3><div class='price'>"+"₹"+price+"</div><button onclick='mains("+id+","+cat+");' class='btn'>Buy Now</button></div></div>"
    
    document.getElementById('wrap').innerHTML += fea_products
    $( ".images" ).mouseenter(function() {
        window.source = this.src
        this.src = "image/product"+this.alt+"-2"+".png";
       
      });
      $( ".images" ).mouseleave(function() {
        this.src = window.source
      })
    

}
for(var i =0; i < 2;i++){
 
 
    new_products1 = "<a href="+"collection.html#"+list[i].name1+" name="+list[i].name1+" class='swiper-slide box' > <div class='image'> <img src="+list[i].image+" alt=''> </div> <div class='content1'> <div class='price'>"+list[i].name+" </div></div> </a>"
   
    document.getElementById('wrap1').innerHTML += new_products1;
  
}
for(var i =2; i < 4;i++){
  
    
    new_products2 = "<a href="+"collection.html#"+list[i].name1+" name="+list[i].name1+" class='swiper-slide box'> <div class='image'> <img src="+list[i].image+" alt=''> </div> <div class='content1'> <div class='price'>"+list[i].name+" </div>  </div> </a>"
   
    document.getElementById('wrap2').innerHTML += new_products2;
  
}



  window.onload(fetch())

