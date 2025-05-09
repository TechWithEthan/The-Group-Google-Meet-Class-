document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulating a simple check for username and password
    if(username === "pushkar" && password === "pushkar@2025") {
        // If login is successful, show a success alert
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Welcome to the Employee Attendance Management System!',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "Attendance-data.html"; // Redirect to dashboard or home page
            }
        });
    } else {
        // If login fails, show an error alert
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Incorrect username or password. Please try again.',
            confirmButtonText: 'Try Again'
        });
    }
});

