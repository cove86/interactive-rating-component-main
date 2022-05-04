'use strict';

const ratingBtnDiv = document.querySelector('.rating-div');
const ratingBtn = document.querySelectorAll('.rating-number');
const submitBtn = document.querySelector('.btn-submit');
const ratingCard = document.getElementById('rating-card');
const thankYouCard = document.getElementById('thankyou-card');
let ratingText = document.querySelector('.rating-text');

let rating;

ratingBtnDiv.addEventListener('click', e => {
  let clicked = e.target.closest('.rating-number');

  if (!clicked) return;

  ratingBtn.forEach(b => b.classList.remove('rating-selected'));

  clicked.classList.add('rating-selected');

  rating = clicked.dataset.src;
});

submitBtn.addEventListener('click', e => {
  console.log(rating);
  ratingCard.classList.add('hide');
  thankYouCard.classList.remove('hide');
  ratingText.innerHTML = `You selected ${rating} out of 5`;
});
