function getNextBirthday(month, day) {
    const now = new Date();
    let year = now.getFullYear();
    let nextBirthday = new Date(year, month - 1, day, 0, 0, 0);
    if (now > nextBirthday) {
        nextBirthday.setFullYear(year + 1);
    }
    return nextBirthday;
}

const birthMonth = 12;  // Change this to your birth month
const birthDay = 29;    // Change this to your birth day

// Confetti instance
const jsConfetti = new JSConfetti();

let alreadyCelebrated = false;

function updateTimer() {
    const now = new Date();
    const birthday = getNextBirthday(birthMonth, birthDay);

    // If time has reached birthday
    if (birthday - now <= 0) {
        document.getElementById("timer").innerHTML = "🎂 Happy Birthday , Mr Max! 🎉";
        if (!alreadyCelebrated) {
            alreadyCelebrated = true;
            jsConfetti.addConfetti();
            setTimeout(() => jsConfetti.addConfetti(), 800);
            setTimeout(() => jsConfetti.addConfetti(), 1600);
        }
        return;
    }

    // Calculate months and days
    let months, days;
    let tempYear = now.getFullYear();
    let tempMonth = now.getMonth();
    let tempDay = now.getDate();

    months = (birthday.getFullYear() - tempYear) * 12 + (birthday.getMonth() - tempMonth);
    if (birthday.getDate() < tempDay) {
        months -= 1;
        let prevMonth = new Date(birthday.getFullYear(), birthday.getMonth(), 0);
        days = prevMonth.getDate() - (tempDay - birthday.getDate());
    } else {
        days = birthday.getDate() - tempDay;
    }

    let diff = birthday - now;
    let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        `${months}M ${days}D ${mins}m ${secs}s`;

    // Reset celebration if clock is ticking again
    alreadyCelebrated = false;
}

setInterval(updateTimer, 1000);
updateTimer();
