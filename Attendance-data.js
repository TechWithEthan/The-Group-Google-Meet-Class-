// Array of thoughts 
const thoughts = [
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Don't count the days. Make the days count.",
  "You are braver than you believe, stronger than you seem, and smarter than you think.",
  "The only way to do great work is to love what you do."
];

// Function to display a random thought
function displayRandomThought() {
  const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
  const thoughtElement = document.getElementById("thought");
  if (thoughtElement) {
    thoughtElement.textContent = randomThought;
  }
}

// Display a random thought on page load and every 10 seconds
displayRandomThought();
setInterval(displayRandomThought, 10000);

// Disable right-click
document.addEventListener('contextmenu', event => {
  event.preventDefault();
  Swal.fire({
    icon: 'warning',
    title: 'Action Blocked',
    text: 'Right-click functionality has been disabled to enhance security and maintain a seamless experience.',
    customClass: 'swal-responsive'
  });
});

// Block inspect element keys
document.addEventListener('keydown', function (event) {
  if (
    event.key === 'F12' ||
    (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) ||
    (event.ctrlKey && event.key === 'U')
  ) {
    event.preventDefault();
    Swal.fire({
      icon: 'error',
      title: 'Not Allowed',
      text: 'You are not allowed to view the source code. It is for development only.',
      customClass: 'swal-responsive'
    });
  }
});

// DevTools detection (optimized)
(function() {
  const element = new Image();
  Object.defineProperty(element, 'id', {
    get: function() {
      Swal.fire({
        icon: 'error',
        title: 'DevTools Detected',
        text: 'Inspecting tools are not permitted on this website.',
        customClass: 'swal-responsive'
      }).then(() => {
        window.location.href = 'about:blank';
      });
    }
  });

  let timer = setInterval(function() {
    console.log(element);
    console.clear();
  }, 1000);

  element.onerror = () => {
    clearInterval(timer);
  };
})();

// Login form handler
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "pushkar" && password === "pushkar@2025") {
    Swal.fire({
      icon: 'success',
      title: 'Login Successful',
      text: 'Welcome to the Employee Attendance Management System!',
      confirmButtonText: 'OK',
      customClass: 'swal-responsive'
    }).then(() => {
      window.location.href = "Attendance-data.html";
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: 'Incorrect username or password.',
      confirmButtonText: 'Try Again',
      customClass: 'swal-responsive'
    });
  }
});

// Google Sign-In handler
document.getElementById("googleSignIn").addEventListener("click", function() {
  Swal.fire({
    icon: 'info',
    title: 'Google Sign-In',
    text: 'Redirecting...',
    confirmButtonText: 'OK',
    customClass: 'swal-responsive'
  }).then(() => {
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth";
  });
});

// Facebook Sign-In handler
document.getElementById("facebookSignIn").addEventListener("click", function() {
  Swal.fire({
    icon: 'info',
    title: 'Facebook Sign-In',
    text: 'Redirecting...',
    confirmButtonText: 'OK',
    customClass: 'swal-responsive'
  }).then(() => {
    window.location.href = "https://www.facebook.com/v12.0/dialog/oauth";
  });
});
