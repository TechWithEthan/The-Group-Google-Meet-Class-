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

// Set up countdown timer
const startTime = new Date("May 10, 2025 2:00:00 PM");
const endTime = new Date("May 16, 2025 4:00:00 PM");

const timer = setInterval(() => {
  const now = new Date().getTime();

  if (now < startTime) {
    const diff = startTime - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(d).padStart(2, '0');
    document.getElementById("hours").innerText = String(h).padStart(2, '0');
    document.getElementById("minutes").innerText = String(m).padStart(2, '0');
    document.getElementById("seconds").innerText = String(s).padStart(2, '0');

    document.getElementById("status").innerText = "We request you to join once the countdown is complete.";
    document.getElementById("meetLink").style.display = "none";
  } else if (now >= startTime && now < endTime) {
    document.getElementById("countdown").style.display = 'none';
    document.getElementById("status").innerText = "Welcome – Your Call is Now LIVE in Progress";
    document.getElementById("meetLink").style.display = "inline-block";
  } else {
    clearInterval(timer);
    document.getElementById("countdown").style.display = 'none';
    document.getElementById("status").innerText = "Session Completed – Access is No Longer Available.";
    const link = document.getElementById("meetLink");
    link.style.display = "inline-block";
    link.classList.add("btn-disabled");
    link.setAttribute("href", "#");
    link.innerText = "Oops! This Link is No Longer Active";
  }
}, 1000);
