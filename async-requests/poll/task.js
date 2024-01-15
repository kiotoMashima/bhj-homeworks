let pollAnswers = document.querySelector('.poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.onload = function () {
  let data = xhr.response;
  let dataParse = JSON.parse(data);
  printForUser(dataParse);
}

function printForUser(data) {
  let pollTitle = document.querySelector('.poll__title');
  pollTitle.textContent = data.data.title;

  data.data.answers.forEach((item) => {
    pollAnswers.innerHTML += `
    <button class="poll__answer">
      ${item}
    </button>`
  });

  pollAnswers.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    if (target.classList.contains('poll__answer')) {
      alert('Спасибо, Ваш голос засчитан!');
    }
    let pollAnswer = [...document.querySelectorAll('.poll__answer')];
    pollAnswer.forEach((item) => {
      item.setAttribute('disabled', true);
    })
  });
}