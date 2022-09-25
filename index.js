function main() {
  alert('Hello, world!');

  const questions = document.querySelectorAll('.question_text');

  console.log(questions);

  const element = document.createElement('div');
  element.innerHTML = html`
    <div class="quizlet-popup">
      <button>search</button>
    </div>
  `;

  questions[0].appendChild(element);

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

  document
    .querySelector('.quizlet-popup button')
    .addEventListener('click', toggleModal);
}

addEventListener('load', main);
