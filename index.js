const toggleModal = (e) => {
  fetch('https://quizlet-search.herokuapp.com/', {
    method: 'post',
    body: e.target.value,
  })
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    });
};

function main() {
  const quizletQuestions = document.querySelectorAll('.question_text');

  const element = document.createElement('div');
  element.innerText = 'search';
  element.style.backgroundColor = 'pink';
  element.addEventListener('click', toggleModal);

  quizletQuestions[0].appendChild(element);
}

window.addEventListener('load', main);
