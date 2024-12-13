function showAlert(playerElement) {
    const playerName = playerElement.getAttribute('data-player');
    alert(`You clicked on ${playerName}!`);
  }
  document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  function checkAnswer() {
    const userAnswer = document.getElementById("quizAnswer").value.toLowerCase();
    const correctAnswer = "12 minutes";
  
    if (userAnswer === correctAnswer) {
      alert("Correct! A quarter lasts 12 minutes.");
    } else {
      alert("Incorrect. Hint: It is less than 15 minutes.");
    }
  }
  function checkAnswer() {
    const userAnswer = document.getElementById("quizAnswer").value.toLowerCase();
    const correctAnswer = "12 minutes";
  
    if (userAnswer === correctAnswer) {
      alert("Correct! A quarter lasts 12 minutes.");
    } else {
      alert("Incorrect. Hint: It is less than 15 minutes.");
    }
  }