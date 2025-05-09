function togglePassword() {
    const passwordInput = document.getElementById("password");
    const btn = event.target;
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      btn.innerText = "Hide";
    } else {
      passwordInput.type = "password";
      btn.innerText = "Show";
    }
  }

  function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");
    if (
      (username === "Admin" && password === "Admin") ||
      (username === "pushkarthakare8@gmail.com" && password === "Admin")
    ) {
      message.style.color = "green";
      message.innerText = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "Dashbord-login.html"; // Or your actual class link
      }, 1500);
    } else {
      message.style.color = "red";
      message.innerText = "Incorrect username or password.";
    }
    return false;
  }

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
      text: 'Action Blocked Right-click functionality has been disabled on this page to enhance security and maintain a seamless user experience.'
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
        text: 'You are not allowed to view the source code. It is for development only.'
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
          text: 'Inspecting tools are not permitted on this website.'
        }).then(() => {
          window.location.href = 'about:blank';
        });
      }
    });
  
    // Optional optimization to prevent constant logging
    let timer = setInterval(function() {
      console.log(element);
      console.clear();
    }, 1000);
  
    // Stop checking when DevTools is detected
    element.onerror = () => {
      clearInterval(timer);
    };
  })();
