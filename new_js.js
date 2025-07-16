function button_b2() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

let b2 = document.getElementById("b2");
b2.addEventListener("click", button_b2);


function button_b1() {
    alert("Login Successfully 🎉🎊 ");
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
}

let b1 = document.getElementById("b1");
b1.addEventListener("click", button_b1);


// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
  if (!document.querySelector('.choice.selected')) {
    alert("Please select an answer.");
    return;
  }
  checkAnswer();
});
