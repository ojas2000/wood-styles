var form = document.querySelector(".form-ch")
form.addEventListener("submit", handleSubmit)
async function handleSubmit(event) {
  event.preventDefault();

  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    Swal.fire({
      title: 'Order Sent',
      
      confirmButtonText: 'ok',
      
      
    }).then((result) => {
   
      if (result.isConfirmed) {
        window.location.replace('cart.html')
      }
  
    })
 
    form.reset()
  }).catch(error => {
    Swal.fire({
      icon: 'error',
      title: 'Sorry Something went wrong',

    })
    window.location.reload()
  });
}


var items = document.getElementById('itemsch')

for (var i = 1; i <= window.sessionStorage.getItem('checkout'); i++) {
  items.innerHTML += "Item " + i + " : " + window.sessionStorage.getItem('checkoutn' + i) + " x " + window.sessionStorage.getItem('checkoutq' + i) + "<br>"
  form.innerHTML += "<input type='text' value='" + window.sessionStorage.getItem('checkoutn' + i) + " x " + window.sessionStorage.getItem('checkoutq' + i) +"' name='Item " + i +"' style='display:none;' >" 

}

form.innerHTML += "<input type='text' value='" +window.sessionStorage.getItem('total') +"' name='Total' style='display:none;' >" 

document.getElementById('SubTC').innerHTML = "₹" +window.sessionStorage.getItem('total');
document.getElementById('SubTC1').innerHTML = "₹" +window.sessionStorage.getItem('total');






