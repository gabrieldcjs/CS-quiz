document.addEventListener('DOMContentLoaded', function () {
  // ELEMENTS
  const resultEl = document.querySelector('.result');
  const inputFieldEl = document.querySelector('.answer');
  const questionEl = document.querySelector('.question');
  const hintEl = document.querySelector('.hint');
  const hintText = document.querySelector('.hint--text');
  // Questions database

  const questions = [
    {
      text: 'Is C a object oriented language (Yes or No)',
      answer: 'no',
      hint: 'The mother of all',
    },
    {
      text: 'Is HTML a coding language (Yes or No)',
      answer: 'no',
      hint: 'Are you dumb?',
    },
    {
      text: 'Is Python a compiled language (Yes or No)',
      answer: 'no',
      hint: 'Nope, no compilers were harmed.',
    },
    {
      text: 'Does Java support multiple inheritance (Yes or No)',
      answer: 'no',
      hint: 'Inheritance quarrels avoided.',
    },
    {
      text: 'Is CSS used for structuring web content (Yes or No)',
      answer: 'no',
      hint: 'Not the building blocks you expect.',
    },
    {
      text: 'Can you use a float data type to store characters in C++ (Yes or No)',
      answer: 'no',
      hint: 'Float like a butterfly, but not a character.',
    },
    {
      text: 'Is JavaScript primarily used for server-side programming (Yes or No)',
      answer: 'no',
      hint: 'More browser whisperer than server guru.',
    },
    {
      text: 'Is the "for" loop suitable for iterating through arrays in Python (Yes or No)',
      answer: 'yes',
      hint: 'Loop-de-loop, array-do-day.',
    },
    {
      text: 'Does C# belong to the C family of programming languages (Yes or No)',
      answer: 'yes',
      hint: 'C you in the family tree.',
    },
    {
      text: 'Is PHP commonly used for web backend development (Yes or No)',
      answer: 'yes',
      hint: 'PHP: Probably Hosting Pizza (and backend).',
    },
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let questionOrder = shuffle(Array.from(questions.keys()));
  let currentQuestionIndex = 0;

  const displayQuestion = function () {
    questionEl.textContent =
      questions[questionOrder[currentQuestionIndex]].text;
    inputFieldEl.value = '';
  };

  document.querySelector('.again').addEventListener('click', function () {
    questionOrder = shuffle(questionOrder);
    currentQuestionIndex = 0;
    displayQuestion();
  });

  document.querySelector('.submit').addEventListener('click', function () {
    const answer = inputFieldEl.value.toLowerCase();
    const correctAnswer = questions[questionOrder[currentQuestionIndex]].answer;
    hintText.textContent = '';
    if (answer === correctAnswer) {
      currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
      resultEl.textContent = 'Correct!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      setTimeout(() => {
        document.querySelector('body').style.backgroundColor = '';
        document.querySelector('.result').textContent = 'Start Guessing!';
        displayQuestion();
      }, 1100);
      displayQuestion();
    } else if (answer != correctAnswer) {
      resultEl.textContent = 'Wrong';
      document.querySelector('body').style.backgroundColor = '#ff0000';
      setTimeout(() => {
        resultEl.textContent = 'Start Guessing!';
        document.querySelector('body').style.backgroundColor = '';
      }, 1100);
    }
  });

  displayQuestion();

  document.querySelector('.hint').addEventListener('click', function () {
    const currentHint = questions[questionOrder[currentQuestionIndex]].hint;
    hintText.textContent = `Hint: ${currentHint}`;
  });
});
