// Function to verify the name and certificate number
function verify() {
    const name = document.getElementById("name").value.trim();
    const certificate = document.getElementById("certificate").value.trim();
    const msg = document.getElementById("msg");

    const validName = "Pushkar Thakare";
    const validCert = "2020";

    if (name && certificate) {
        if (name === validName && certificate === validCert) {
            msg.style.color = "lightgreen";
            msg.innerText = `✅ Verified! Welcome, ${name}.`;

            Swal.fire({
                icon: 'success',
                title: 'Verified!',
                text: `Welcome, ${name}`,
                timer: 1500,
                showConfirmButton: false
            });

            setTimeout(function () {
                window.location.href = "Attendance-data.html";
            }, 1500);

        } else {
            msg.style.color = "orange";
            msg.innerText = "⚠️ Name or Certificate No. doesn't match our records.";

            Swal.fire({
                icon: 'warning',
                title: 'Verification Failed',
                text: "Name or Certificate No. doesn't match our records."
            });
        }
    } else {
        msg.style.color = "red";
        msg.innerText = "❌ Please fill all fields correctly.";

        Swal.fire({
            icon: 'error',
            title: 'Incomplete Fields',
            text: 'Please fill all fields correctly.'
        });
    }
}

// Thoughts array
const thoughts = [
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Don't count the days. Make the days count.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "The only way to do great work is to love what you do."
];

// Function to display random thought
function displayRandomThought() {
    const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    const thoughtElement = document.getElementById("thought");
    if (thoughtElement) {
        thoughtElement.textContent = randomThought;
    }
}

// Display a thought every 10 seconds
displayRandomThought();
setInterval(displayRandomThought, 10000);

// Disable right-click
document.addEventListener('contextmenu', event => {
    event.preventDefault();
    Swal.fire({
        icon: 'warning',
        title: 'Action Blocked',
        text: 'Right-click has been disabled for a secure experience.'
    });
});

// Block inspect keys
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
            text: 'Viewing source code is not permitted.'
        });
    }
});

// DevTools detection
(function () {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            Swal.fire({
                icon: 'error',
                title: 'DevTools Detected',
                text: 'Inspect tools are not allowed.'
            }).then(() => {
                window.location.href = 'Attendance-data.html';
            });
        }
    });

    let timer = setInterval(function () {
        console.log(element);
        console.clear();
    }, 1000);

    element.onerror = () => {
        clearInterval(timer);
    };
})();