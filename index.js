//Solución #1

const params = new URLSearchParams(window.location.search);
const rating = params.get("rating");

if (rating > 0 && rating <= 5) {
  document.querySelector('#rating').textContent = rating
} else {
  document.getElementById("message-container").textContent = ''
  document.querySelector('#title-rating').textContent = 'Oops!'
  document.querySelector('#text-rating').textContent = 'We are sorry, the number you selected is not valid, Try again!'
}


/*
//Solución #2
const numbers = [
  { rating: 1, description: "You selected 1 out of 5" },
  { rating: 2, description: "You selected 2 out of 5" },
  { rating: 3, description: "You selected 3 out of 5" },
  { rating: 4, description: "You selected 4 out of 5" },
  { rating: 5, description: "You selected 5 out of 5" },
];

const params = new URLSearchParams(window.location.search);

const paramRating = params.get("rating");
const rating = parseInt(paramRating);

const number = numbers.find((number) => {
  return number.rating === rating;
});

const contenedorNumber = document.getElementById("message-container");

if (number) {
  contenedorNumber.innerHTML = `
    <div class="message">${number.description}</div>
  `;
} else {
  document.getElementById("message-container").textContent = ''
  document.querySelector('#title-rating').textContent = 'Oops!'
  document.querySelector('#text-rating').textContent = 'We are sorry, the number you selected is not valid, Try again.!'
}
*/