// 🎯 Target Date - April 27, 2025 at 6:54 PM
const countdownDate = new Date("April 27, 2025 6:54:59 PM").getTime();

// 🔁 Update countdown every second
const countdownTimer = setInterval(() => {
    const now = new Date().getTime(); // 📅 Current time
    const distance = countdownDate - now; // ⏳ Time left

    // 🧮 Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 🖊️ Display the countdown
    const countdownElement = document.getElementById("countdown");

    if (distance >= 0) {
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        // ✅ When countdown is over
        clearInterval(countdownTimer);
        countdownElement.innerHTML = "🎉 Website is Live!";
        
        // 📂 Redirect to the Google Meet Class file
        window.location.href = "The Group - Google Meet Class.html"; // Change the file name if needed
    }
}, 1000);