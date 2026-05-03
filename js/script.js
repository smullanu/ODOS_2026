function showStudentMessage() {
  const message = document.getElementById("student-message");

  message.textContent = "Thank you for visiting my page! You can change to any message ...";
}

function showProgramInfo() {
  const info = document.getElementById("program-info");

  window.location.href = "program_calendar.html";
}