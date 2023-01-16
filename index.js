const button = document.getElementById('submit')
const element = document.getElementById('h1')
const container = document.getElementById('container')

button.addEventListener('click', function(){
   let rating = document.querySelector('input[name="rating"]:checked').value;
    
   if (rating < 0 ){
    element.innerText = 'Please select a rating.'
   } else {
    
    container.innerHTML = 
    `
    <img class='thank-you' src='./images/illustration-thank-you.svg' alt='Picture of phone'>
    <p class='result'>You selected ${rating} out of 5<p>

    <h1 class='thanks-h1'>Thank you!<h1>
    <h2 class='thanks-p'>We appreciate you taking the time to give a rating.
    If you ever need more support, don't hesitate to get in touch!<h2>
    
    `

   }


})




