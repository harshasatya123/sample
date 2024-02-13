// Countdown Timer
const countdownElement = document.getElementById('countdown');

function countdown() {
    const countDate = new Date().getTime() + 600000; // 10 minutes in milliseconds

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countDate - now;

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "EXPIRED";
        }
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

countdown();

// Slide-Up Form
setTimeout(function(){
    document.getElementById('slideUpForm').classList.add('active');
}, 15000); // Show after 15 seconds
