
document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents actual page reload

  const email = document.getElementById("email").value;

  // Simulate sending email
  alert(`A reset link has been sent to: ${email}`);

  // You can later replace this with a fetch() call to a real backend:
  // fetch("/api/send-reset-link", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ email })
  // });
});

