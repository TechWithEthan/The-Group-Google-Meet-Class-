
// Add a style tag for responsive SweetAlert2 popup
const style = document.createElement('style');
style.textContent = `
  .custom-swal {
    width: 90vw !important;
    max-width: 400px;
    box-sizing: border-box;
    font-size: 1rem;
  }
`;
document.head.appendChild(style);

// Array containing the list of motivational thoughts
const thoughts = [
  "Believe in yourself and all that you are.",
  "Every day is a new beginning.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The expert in anything was once a beginner.",
  "You are capable of amazing things!",
  "Dream big and dare to fail.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes later becomes never. Do it now.",
  "Stay focused and never give up.",
  "You don’t have to be great to start, but you have to start to be great."
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
    text: 'Right-click is disabled on this page.',
    customClass: { popup: 'custom-swal' }
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
      customClass: { popup: 'custom-swal' }
    });
  }
});

// DevTools detection (console.log trick)
(function () {
  const element = new Image();
  Object.defineProperty(element, 'id', {
    get: function () {
      Swal.fire({
        icon: 'error',
        title: 'DevTools Detected',
        text: 'Inspecting tools are not permitted on this website.',
        customClass: { popup: 'custom-swal' }
      }).then(() => {
        window.location.href = 'about:blank';
      });
    }
  });

  setInterval(function () {
    console.log(element);
    console.clear();
  }, 1000);
})();