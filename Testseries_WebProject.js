
// const container = document.querySelector('.container');
// const questionBox = document.querySelector('.question');
// const choicesBox = document.querySelector('.choices');
// const nextBtn = document.querySelector('.nextBtn');
// const scoreCard = document.querySelector('.scoreCard');
// const alert = document.querySelector('.alert');
// const startBtn = document.querySelector('.startBtn');
// const timer = document.querySelector('.timer');


// // Make an array of objects that stores question, choices of question and answer
// const quiz = [
//     {
//     "question": "Which of the following is not a type of malware?",
//     "choices": ["Virus", "Worm", "Firewall", "Trojan"],
//     "answer": "Firewall"
//   },
//      {
//     "question": "What does phishing refer to?",
//     "choices": ["Encrypting files", "Sending fraudulent emails to steal data", "Blocking spam", "Monitoring network traffic"],
//     "answer": "Sending fraudulent emails to steal data"
//   },
//     {
//     "question": "Encryption is best described as:",
//     "choices": ["Converting plaintext to ciphertext", "Compressing files", "Authenticating a user", "Scanning for viruses"],
//     "answer": "Converting plaintext to ciphertext"
//   },
//   {
//     "question": "A firewall primarily:",
//     "choices": ["Deletes spam", "Filters unauthorized network traffic", "Backs up data", "Monitors CPU usage"],
//     "answer": "Filters unauthorized network traffic"
//   },
//   {
//     "question": "HTTPS stands for:",
//     "choices": ["HyperText Transfer Protocol Secure", "High-speed Transfer Protocol", "Hyperlink Transfer Protocol Standard", "Hyper Transfer Text Service"],
//     "answer": "HyperText Transfer Protocol Secure"
//   },
//   {
//     "question": "Which is a strong password?",
//     "choices": ["password123", "qwerty", "Shivani@2025!", "12345678"],
//     "answer": "Shivani@2025!"
//   },
//   {
//     "question": "A worm differs from a virus because it:",
//     "choices": ["Requires a host file", "Self-replicates over networks", "Encrypts user data", "Runs only in memory"],
//     "answer": "Self-replicates over networks"
//   },
//   {
//     "question": "Spyware is software that:",
//     "choices": ["Deletes files", "Speeds up a system", "Tracks user activity secretly", "Blocks pop-ups"],
//     "answer": "Tracks user activity secretly"
//   },
//   {
//     "question": "The abbreviation VPN stands for:",
//     "choices": ["Virtual Protected Network", "Visual Private Node", "Virtual Private Network", "Verified Proxy Node"],
//     "answer": "Virtual Private Network"
//   },
//   {
//     "question": "Authentication is the process of:",
//     "choices": ["Validating user identity", "Encrypting messages", "Checking for updates", "Filtering traffic"],
//     "answer": "Validating user identity"
//   },
//   {
//     "question": "Which tool captures network packets?",
//     "choices": ["Wireshark", "Notepad", "Adobe Reader", "Excel"],
//     "answer": "Wireshark"
//   },
//   {
//     "question": "ARP spoofing targets:",
//     "choices": ["Mapping IP to MAC addresses", "SQL queries", "DNS servers", "FTP login"],
//     "answer": "Mapping IP to MAC addresses"
//   },
//   {
//     "question": "A honeypot is used to:",
//     "choices": ["Trap attackers for analysis", "Encrypt traffic", "Speed up networks", "Filter emails"],
//     "answer": "Trap attackers for analysis"
//   },
//   {
//     "question": "SSL/TLS certificates help:",
//     "choices": ["Encrypt web traffic", "Delete cookies", "Manage backups", "Prevent scanning"],
//     "answer": "Encrypt web traffic"
//   },
//   {
//     "question": "A proxy server acts as:",
//     "choices": ["An intermediary between client & server", "A virus scanner", "A firewall", "A DNS tool"],
//     "answer": "An intermediary between client & server"
//   },
//   {
//     "question": "DNS poisoning attacks:",
//     "choices": ["Modify DNS records to misdirect traffic", "Inject SQL commands", "Block emails", "Break encryptions"],
//     "answer": "Modify DNS records to misdirect traffic"
//   },
//   {
//     "question": "Session hijacking involves:",
//     "choices": ["Stealing cookies to assume identity", "Phishing emails", "Malicious downloads", "Brute-forcing passwords"],
//     "answer": "Stealing cookies to assume identity"
//   },
//   {
//     "question": "Port scanning is used to:",
//     "choices": ["Find open ports", "Send spam", "Encrypt files", "Track keystrokes"],
//     "answer": "Find open ports"
//   },
//   {
//     "question": "TCP handshake involves:",
//     "choices": ["SYN, SYN-ACK, ACK", "GET, POST, ACK", "PUSH, PULL, ACK", "SYN, PUSH, URG"],
//     "answer": "SYN, SYN-ACK, ACK"
//   },
//   {
//     "question": "Antivirus software uses:",
//     "choices": ["Signature and heuristic detection", "Encryption algorithms", "Firewall rules", "Network scans"],
//     "answer": "Signature and heuristic detection"
//   },
//   {
//     "question": "Patch management is important to prevent:",
//     "choices": ["Exploit of known vulnerabilities", "Password cracking", "Email spam", "Encryption failures"],
//     "answer": "Exploit of known vulnerabilities"
//   },
//   {
//     "question": "A sandbox environment is used to:",
//     "choices": ["Run untrusted code safely", "Store backups", "Encrypt data", "Filter traffic"],
//     "answer": "Run untrusted code safely"
//   },
//   {
//     "question": "Privilege escalation allows an attacker to:",
//     "choices": ["Gain higher access rights", "Install antivirus", "Update BIOS", "Reset passwords"],
//     "answer": "Gain higher access rights"
//   },
//   {
//     "question": "UAC (User Account Control) is found on:",
//     "choices": ["Windows systems", "Linux only", "macOS only", "Firewalls"],
//     "answer": "Windows systems"
//   },
// ];

// // Making Variables
// let currentQuestionIndex = 0;
// let score = 0;
// let quizOver = false;
// let timeLeft = 30;
// let timerID = null;

// // Arrow Function to Show Questions
// const showQuestions = () => {


//     stopTimer();  // Stop previous timer first
//     timeLeft = 30; // Reset timer for the new question
//     startTimer();  // Start new timer
//     const questionDetails = quiz[currentQuestionIndex];
//     questionBox.textContent = questionDetails.question;

//     choicesBox.textContent = "";
//     for (let i = 0; i < questionDetails.choices.length; i++) {
//         const currentChoice = questionDetails.choices[i];
//         const choiceDiv = document.createElement('div');
//         choiceDiv.textContent = currentChoice;
//         choiceDiv.classList.add('choice');
//         choicesBox.appendChild(choiceDiv);

//         choiceDiv.addEventListener('click', () => {
//             if (choiceDiv.classList.contains('selected')) {
//                 choiceDiv.classList.remove('selected');
//             }
//             else {
//                 choiceDiv.classList.add('selected');
//             }
//         });
//     }

//     if(currentQuestionIndex < quiz.length){
//         startTimer();
//     }
// }

// // Function to check answers
// const checkAnswer = () => {

 
//     //stopTimer();
//     const selectedChoice = document.querySelector('.choice.selected');
//     const correctAnswer = quiz[currentQuestionIndex].answer;

//     // Loop through all choices to mark correct/incorrect
//     const allChoices = document.querySelectorAll('.choice');
//     allChoices.forEach(choice => {
//         if (choice.textContent === correctAnswer) {
//             choice.classList.add('correct');
//         }
//         if (selectedChoice && choice === selectedChoice && choice.textContent !== correctAnswer) {
//             choice.classList.add('incorrect');
//         }

//         // Disable further selection
//         choice.style.pointerEvents = "none";
//     });

//     // if (selectedChoice && selectedChoice.textContent === correctAnswer) {
//     //     displayAlert("Correct Answer!");
//     //     score++;
//     // } else {
//     //     displayAlert(`Wrong Answer! ${correctAnswer} is the Correct Answer`);
//     // }

//     timeLeft = 30;
//     currentQuestionIndex++;

//     // Wait before showing next question
//     setTimeout(() => {
//         if (currentQuestionIndex < quiz.length) {
//             showQuestions();
//         } else {
//             stopTimer();
//             showScore();
//         }
//     }, 1000); // Delay to show colors before next question
// }



// // Function to show score
// const showScore = () => {
//     questionBox.textContent = "";
//     choicesBox.textContent = "";
//     scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
//     displayAlert("You have completed this quiz!");
//     nextBtn.textContent = "Play Again";
//     quizOver = true;
//     timer.style.display = "none";
// }

// // Function to Show Alert
// const displayAlert = (msg) => {
//     alert.style.display = "block";
//     alert.textContent = msg;
//     setTimeout(()=>{
//         alert.style.display = "none";
//     }, 2000);
// }

// // Function to Start Timer
// const startTimer = () => {
//     clearInterval(timerID); // Just in case
//     timer.textContent = timeLeft;

//     timerID = setInterval(() => {
//         timeLeft--;
//         timer.textContent = timeLeft;

//         if (timeLeft <= 0) {
//             clearInterval(timerID);
//             const confirmUser = confirm("⏰ Time's Up! Do you want to restart the quiz?");
//             if (confirmUser) {
//                 startQuiz();
//             } else {
//                 startBtn.style.display = "block";
//                 container.style.display = "none";
//             }
//         }
//     }, 1000);
// };


// // Function to Stop Timer
// const stopTimer = () =>{
//     clearInterval(timerID);
// }

// // Function to shuffle question
// const shuffleQuestions = () =>{
//     for(let i=quiz.length-1; i>0; i--){
//         const j = Math.floor(Math.random() * (i+1));
//         [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
//     }
//     currentQuestionIndex = 0;
//     showQuestions();
// }

// // Function to Start Quiz
// const startQuiz = () =>{
//     timeLeft = 30;
//     timer.style.display = "flex";
//      quizOver = false;
//       currentQuestionIndex = 0;
//      score = 0;
//     shuffleQuestions();
// }

// // Adding Event Listener to Start Button
// startBtn.addEventListener('click', ()=>{
//     startBtn.style.display = "none";
//     container.style.display = "block";
//     startQuiz();
// });

// nextBtn.addEventListener('click', () => {
//     const selectedChoice = document.querySelector('.choice.selected');
//     if (!selectedChoice && nextBtn.textContent === "Next") {
//         // alert("Select your answer");
//         displayAlert("Select your answer");
//         return;
//     }
//     if (quizOver) {
//         nextBtn.textContent = "Next";
//         scoreCard.textContent = "";
//         currentQuestionIndex = 0;
//         quizOver = false;
//         score = 0;
//         startQuiz();
//     }
//     else {
//         checkAnswer();
//     }
// });

const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');

// Quiz Questions
const quiz = [
  {
    question: "Which of the following is not a type of malware?",
    choices: ["Virus", "Worm", "Firewall", "Trojan"],
    answer: "Firewall"
  },
  {
    question: "What does phishing refer to?",
    choices: ["Encrypting files", "Sending fraudulent emails to steal data", "Blocking spam", "Monitoring network traffic"],
    answer: "Sending fraudulent emails to steal data"
  },
  {
    "question": "Encryption is best described as:",
    "choices": ["Converting plaintext to ciphertext", "Compressing files", "Authenticating a user", "Scanning for viruses"],
    "answer": "Converting plaintext to ciphertext"
  },
  {
    "question": "A firewall primarily:",
    "choices": ["Deletes spam", "Filters unauthorized network traffic", "Backs up data", "Monitors CPU usage"],
    "answer": "Filters unauthorized network traffic"
  },
  {
    "question": "HTTPS stands for:",
    "choices": ["HyperText Transfer Protocol Secure", "High-speed Transfer Protocol", "Hyperlink Transfer Protocol Standard", "Hyper Transfer Text Service"],
    "answer": "HyperText Transfer Protocol Secure"
  },
  {
    "question": "Which is a strong password?",
    "choices": ["password123", "qwerty", "Shivani@2025!", "12345678"],
    "answer": "Shivani@2025!"
  },
  {
    "question": "A worm differs from a virus because it:",
    "choices": ["Requires a host file", "Self-replicates over networks", "Encrypts user data", "Runs only in memory"],
    "answer": "Self-replicates over networks"
  },
  {
    "question": "Spyware is software that:",
    "choices": ["Deletes files", "Speeds up a system", "Tracks user activity secretly", "Blocks pop-ups"],
    "answer": "Tracks user activity secretly"
  },
  {
    "question": "The abbreviation VPN stands for:",
    "choices": ["Virtual Protected Network", "Visual Private Node", "Virtual Private Network", "Verified Proxy Node"],
    "answer": "Virtual Private Network"
  },
  {
    "question": "Authentication is the process of:",
    "choices": ["Validating user identity", "Encrypting messages", "Checking for updates", "Filtering traffic"],
    "answer": "Validating user identity"
  },
  {
    "question": "Which tool captures network packets?",
    "choices": ["Wireshark", "Notepad", "Adobe Reader", "Excel"],
    "answer": "Wireshark"
  },
  {
    "question": "ARP spoofing targets:",
    "choices": ["Mapping IP to MAC addresses", "SQL queries", "DNS servers", "FTP login"],
    "answer": "Mapping IP to MAC addresses"
  },
  {
    "question": "A honeypot is used to:",
    "choices": ["Trap attackers for analysis", "Encrypt traffic", "Speed up networks", "Filter emails"],
    "answer": "Trap attackers for analysis"
  },
  {
    "question": "SSL/TLS certificates help:",
    "choices": ["Encrypt web traffic", "Delete cookies", "Manage backups", "Prevent scanning"],
    "answer": "Encrypt web traffic"
  },
  {
    "question": "A proxy server acts as:",
    "choices": ["An intermediary between client & server", "A virus scanner", "A firewall", "A DNS tool"],
    "answer": "An intermediary between client & server"
  },
  {
    "question": "DNS poisoning attacks:",
    "choices": ["Modify DNS records to misdirect traffic", "Inject SQL commands", "Block emails", "Break encryptions"],
    "answer": "Modify DNS records to misdirect traffic"
  },
  {
    "question": "Session hijacking involves:",
    "choices": ["Stealing cookies to assume identity", "Phishing emails", "Malicious downloads", "Brute-forcing passwords"],
    "answer": "Stealing cookies to assume identity"
  },
  {
    "question": "Port scanning is used to:",
    "choices": ["Find open ports", "Send spam", "Encrypt files", "Track keystrokes"],
    "answer": "Find open ports"
  },
  {
    "question": "TCP handshake involves:",
    "choices": ["SYN, SYN-ACK, ACK", "GET, POST, ACK", "PUSH, PULL, ACK", "SYN, PUSH, URG"],
    "answer": "SYN, SYN-ACK, ACK"
  },
  {
    "question": "Antivirus software uses:",
    "choices": ["Signature and heuristic detection", "Encryption algorithms", "Firewall rules", "Network scans"],
    "answer": "Signature and heuristic detection"
  },
  {
    "question": "Patch management is important to prevent:",
    "choices": ["Exploit of known vulnerabilities", "Password cracking", "Email spam", "Encryption failures"],
    "answer": "Exploit of known vulnerabilities"
  },
  {
    "question": "A sandbox environment is used to:",
    "choices": ["Run untrusted code safely", "Store backups", "Encrypt data", "Filter traffic"],
    "answer": "Run untrusted code safely"
  },
  {
    "question": "Privilege escalation allows an attacker to:",
    "choices": ["Gain higher access rights", "Install antivirus", "Update BIOS", "Reset passwords"],
    "answer": "Gain higher access rights"
  },
  {
    "question": "UAC (User Account Control) is found on:",
    "choices": ["Windows systems", "Linux only", "macOS only", "Firewalls"],
    "answer": "Windows systems"
  },
 
];

let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;

// Show Questions
const showQuestions = () => {
  const questionDetails = quiz[currentQuestionIndex];
  questionBox.textContent = questionDetails.question;
  choicesBox.textContent = "";

  for (let i = 0; i < questionDetails.choices.length; i++) {
    const currentChoice = questionDetails.choices[i];
    const choiceDiv = document.createElement('div');
    choiceDiv.textContent = currentChoice;
    choiceDiv.classList.add('choice');
    choicesBox.appendChild(choiceDiv);

    choiceDiv.addEventListener('click', () => {
      // Only one selection at a time
      document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
      choiceDiv.classList.add('selected');
    });
  }
}

// Check Answer
const checkAnswer = () => {
  const selectedChoice = document.querySelector('.choice.selected');
  const correctAnswer = quiz[currentQuestionIndex].answer;

  const allChoices = document.querySelectorAll('.choice');
  allChoices.forEach(choice => {
    if (choice.textContent === correctAnswer) {
      choice.classList.add('correct');
    }
    if (selectedChoice && choice === selectedChoice && choice.textContent !== correctAnswer) {
      choice.classList.add('incorrect');
    }
    choice.style.pointerEvents = "none";
  });

  if (selectedChoice && selectedChoice.textContent === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  setTimeout(() => {
    if (currentQuestionIndex < quiz.length) {
      showQuestions();
    } else {
      showScore();
    }
  }, 1000);
}

// Show Score
const showScore = () => {
  // Hide quiz content
  container.style.display = "none";

  // Show final screen
  const cer = document.getElementById("cer1");
  cer.innerHTML = `
    <h2>🎉 QUIZ COMPLETED!</h2>
    <p style="font-size: 24px;">You scored <strong>${score}</strong> out of <strong>${quiz.length}</strong>.</p>
    <button class="btn restartBtn">Restart Quiz</button>
    <button class="btncer" id="homeBtn">GO TO HOME PAGE</button>
  `;
  cer.style.display = "block";
  quizOver = true;

  // Restart Quiz
  document.querySelector('.restartBtn').addEventListener('click', () => {
    cer.style.display = "none";
    container.style.display = "block";
    startQuiz();
  });

  // Redirect to home page
  document.getElementById('homeBtn').addEventListener('click', () => {
    window.location.href = "test_webproject.html"; // Change to your actual homepage path
  });
};



// Shuffle Questions
const shuffleQuestions = () => {
  for (let i = quiz.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
  }
  currentQuestionIndex = 0;
  showQuestions();
}

// Start Quiz
const startQuiz = () => {
  quizOver = false;
  currentQuestionIndex = 0;
  score = 0;
  scoreCard.textContent = "";
  nextBtn.textContent = "Next";
  document.getElementById("cer1").style.display = "none";
  shuffleQuestions();
  const startQuiz = () => {
  quizOver = false;
  currentQuestionIndex = 0;
  score = 0;
  scoreCard.textContent = "";
  nextBtn.textContent = "Next";

  // Show quiz elements
  questionBox.style.display = "block";
  choicesBox.style.display = "block";
  nextBtn.style.display = "inline-block";

  // Hide completion page
  document.getElementById("cer1").style.display = "none";

  shuffleQuestions();
};

}

// Event Listeners
startBtn.addEventListener('click', () => {
  startBtn.style.display = "none";
  container.style.display = "block";
  startQuiz();
});

nextBtn.addEventListener('click', () => {
  const selectedChoice = document.querySelector('.choice.selected');
  if (!selectedChoice && nextBtn.textContent === "Next") {
    displayAlert("Select your answer");
    return;
  }

  if (quizOver) {
    startQuiz();
  } else {
    checkAnswer();
  }
});
document.querySelector('.btncer').addEventListener('click', () => {
  generateCertificate(score);
});

// function generateCertificate(score) {
//   const canvas = document.getElementById('certificateCanvas');
//   const ctx = canvas.getContext('2d');
//   canvas.style.display = 'block';

//   // White background
//   ctx.fillStyle = '#fff';
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   // Border
//   ctx.strokeStyle = '#000';
//   ctx.lineWidth = 4;
//   ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

//   // Header text
//   ctx.fillStyle = '#000';
//   ctx.font = '32px Arial';
//   ctx.textAlign = 'center';
//   ctx.fillText('Certificate of Completion', canvas.width / 2, 100);

//   // Name or placeholder
//   ctx.font = '24px Arial';
//   ctx.fillText('This is to certify that', canvas.width / 2, 180);
//   ctx.font = '30px Georgia';
//   ctx.fillText('YOU', canvas.width / 2, 230); // You can replace "YOU" with dynamic name if needed

//   // Score
//   ctx.font = '22px Arial';
//   ctx.fillText(`Scored ${score} out of ${quiz.length} in the Cybersecurity Quiz`, canvas.width / 2, 300);

//   // Footer
//   ctx.font = '18px Arial';
//   ctx.fillText(`Awarded on ${new Date().toLocaleDateString()}`, canvas.width / 2, 380);

//   // Draw signature line
//   ctx.beginPath();
//   ctx.moveTo(canvas.width / 2 - 100, 450);
//   ctx.lineTo(canvas.width / 2 + 100, 450);
//   ctx.stroke();

//   ctx.font = '16px Arial';
//   ctx.fillText("Instructor's Signature", canvas.width / 2, 470);

//   // Show download link
//   const downloadLink = document.getElementById('downloadLink');
//   downloadLink.href = canvas.toDataURL('image/png');
//   downloadLink.style.display = 'inline-block';
//   downloadLink.textContent = 'Download Your Certificate';
// }
// 
