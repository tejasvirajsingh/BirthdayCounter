document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("countdown").style.display = "inline-block"; // show box

    let birthday = new Date("2025-12-29T00:00:00");

    function updateCountdown() {
        let now = new Date();
        let diff = birthday - now;

        if (diff <= 0) {
            document.getElementById("countdown").innerHTML = "🎉 Happy Birthday! 🥳";
            clearInterval(timer);
            return;
        }

        // Calculate months
        let months = (birthday.getFullYear() - now.getFullYear()) * 12 + (birthday.getMonth() - now.getMonth());
        let tempDate = new Date(now);
        tempDate.setMonth(tempDate.getMonth() + months);

        if (tempDate > birthday) {
            months--;
            tempDate.setMonth(tempDate.getMonth() - 1);
        }

        let days = Math.floor((birthday - tempDate) / (1000 * 60 * 60 * 24));
        let hours = Math.floor((birthday - now) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor((birthday - now) % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor((birthday - now) % (1000 * 60) / 1000);

        document.getElementById("countdown").innerHTML = 
            `${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    var timer = setInterval(updateCountdown, 1000);
});
