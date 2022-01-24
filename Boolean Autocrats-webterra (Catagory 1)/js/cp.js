var form = document.querySelector(".form-cp")
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
        Swal.fire(
            'Message Sent',
            'Your message will be answered in under 24 hours',
            'success'
            
        )
      form.reset()
    }).catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Sorry Something went wrong',

        })
      window.location="custom-Products.html.html";
    });
  }
  
  