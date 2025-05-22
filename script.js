const questions = [
  {
    text: '1. Ieri ___ (fare) molto freddo.',
    answers: ['faceva']
  },
  {
    text: '2. Stamattina noi ___ (perdere) l’autobus.',
    answers: ['abbiamo perso']
  },
  {
    text: '3. Da bambino, Paolo ___ (giocare) sempre in giardino.',
    answers: ['giocava']
  }
];

function createExercise() {
  const container = document.getElementById("exercise-container");
  container.innerHTML = '';
  questions.forEach((q, idx) => {
    const block = document.createElement("div");
    let html = `<label>${q.text}</label>`;
    q.answers.forEach((_, i) => {
      html += `<input type="text" id="q${idx}_${i}">`;
    });
    block.innerHTML = html;
    container.appendChild(block);
  });
}

function checkAnswers() {
  let correct = 0;
  let total = 0;
  questions.forEach((q, idx) => {
    q.answers.forEach((ans, i) => {
      const field = document.getElementById(`q${idx}_${i}`);
      const userInput = field.value.trim().toLowerCase();
      if (userInput === ans.toLowerCase()) {
        field.style.borderColor = "#2a8b2a";
        correct++;
      } else {
        field.style.borderColor = "#c9302c";
      }
      total++;
    });
  });
  const feedback = document.getElementById("feedback");
  if (correct === total) {
    feedback.innerHTML = "<span style='color: green; font-weight: bold;'>Bravo! Ottimo lavoro!</span>";
  } else {
    feedback.innerHTML = `<span style='color: #a03c3f; font-weight: bold;'>Je hebt ${correct} van de ${total} goed. Probeer het nog eens.</span>`;
  }
}

function resetExercise() {
  createExercise();
  document.getElementById("feedback").innerHTML = "";
}

createExercise();
