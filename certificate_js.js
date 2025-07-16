// Replace these values with dynamic retrieval or storage if needed
const score = localStorage.getItem('quizScore') || 0;
const totalQuestions = localStorage.getItem('quizTotal') || 0;

function downloadCertificate() {
  const name = prompt("Enter your name for the certificate:");
  if (!name) return;

  const canvas = document.getElementById('certificateCanvas');
  const ctx = canvas.getContext('2d');
  canvas.style.display = 'block';

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#000";
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.font = "32px Arial";
  ctx.fillText("Certificate of Completion", canvas.width / 2, 100);
  ctx.font = "24px Arial";
  ctx.fillText("This certifies that", canvas.width / 2, 160);
  ctx.font = "30px Georgia";
  ctx.fillText(name, canvas.width / 2, 210);
  ctx.font = "22px Arial";
  ctx.fillText(`Scored ${score} out of ${totalQuestions}`, canvas.width / 2, 270);
  ctx.fillText(`Awarded on ${new Date().toLocaleDateString()}`, canvas.width / 2, 320);

  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 100, 380);
  ctx.lineTo(canvas.width / 2 + 100, 380);
  ctx.stroke();
  ctx.font = "18px Arial";
  ctx.fillText("Instructor's Signature", canvas.width / 2, 400);

  const link = document.createElement('a');
  link.download = 'certificate.png';
  link.href = canvas.toDataURL();
  link.click();
}

document.getElementById('downloadCertBtn').addEventListener('click', downloadCertificate);
