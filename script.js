const questions = [
  {
    text: '1. Ieri sera, mentre ___ (guardare) la TV, ___ (sentire) un rumore strano.',
    answers: ['guardavo', 'ho sentito']
  },
  {
    text: '2. Quando ero piccolo, ___ (andare) spesso al parco con mio nonno.',
    answers: ['andavo']
  },
  {
    text: '3. L\'anno scorso, noi ___ (visitare) Roma per la prima volta.',
    answers: ['abbiamo visitato']
  },
  {
    text: '4. Mentre Maria ___ (preparare) la cena, suo marito ___ (arrivare) a casa.',
    answers: ['preparava', 'è arrivato']
  },
  {
    text: '5. Ogni estate, la mia famiglia ___ (passare) le vacanze al mare.',
    answers: ['passava']
  }
];

function createExercise() {
  const container = document.getElementById("exercise-container");
  container.innerHTML = '';
  questions.forEach((q, idx) => {
    const block = document.createElement("div");
    block.style.marginBottom = "2.4rem";
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
