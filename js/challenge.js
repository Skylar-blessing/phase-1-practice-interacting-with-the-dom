let timer = 0;
setInterval(() => {
    timer++;
}
, 1000);

let counter = 0;
const counterDisplay = Document.getElementById('counter-display');

const plusButton = Document.getElementById('plus-button');

const minusButton = Document.getElementById('minus-button');

plusButton.eventListener('click', () => {
    counter++;
    counterDisplay.innerText = counter;
})

minusButton.eventListener('click', () => {
    counter--;
    counterDisplay.innerText = counter;
})

const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach((likeButton) => {
  const counterNumber = likeButton.dataset.counterNumber;
  const likeCountDisplay = likeButton.nextElementSibling;

  let likeCount = 0;

  likeButton.addEventListener('click', () => {
    likeCount++;
    likeCountDisplay.innerText = likeCount;
  });
});

const pauseButton = document.getElementById('pause-button');
const restartButton = document.getElementById('restart-button');

let isPaused = false;
let timerInterval;

pauseButton.addEventListener('click', () => {
  if (isPaused) {
    timerInterval = setInterval(() => {
      timer++;
    
    }, 1000);
    isPaused = false;

    plusButton.disabled = false;
    minusButton.disabled = false;
    likeButtons.forEach((likeButton) => {
      likeButton.disabled = false;
    });

    pauseButton.innerText = 'Pause';
  } else {
    clearInterval(timerInterval);
    isPaused = true;

    // disable all buttons except the pause button
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButtons.forEach((likeButton) => {
      likeButton.disabled = true;
    });

    pauseButton.innerText = 'Resume';
  }
});

restartButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  isPaused = false;
  timer = 0;
  
  plusButton.disabled = false;
  minusButton.disabled = false;
  likeButtons.forEach((likeButton) => {
    likeButton.disabled = false;
  });

  pauseButton.innerText = 'Pause';
});

const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const commentInput = event.target.elements['comment-input'];
  const commentText = commentInput.value;

  const commentItem = document


