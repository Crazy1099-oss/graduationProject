const timer = () => {
    const deadline = new Date('2026-05-24');

    const daysEl = document.querySelector('.count_1 span');
    const hoursEl = document.querySelector('.count_2 span');
    const minutesEl = document.querySelector('.count_3 span');
    const secondsEl = document.querySelector('.count_4 span');

    const addZero = (num) => (num < 10 ? `0${num}` : num);

    let interval;

    function updateTimer() {
        const now = new Date();
        const diff = deadline - now;

        if (isNaN(diff)) {
            console.error('Invalid date diff');
            return;
        }

        if (diff <= 0) {
            clearInterval(interval);

            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        daysEl.textContent = days;
        hoursEl.textContent = addZero(hours);
        minutesEl.textContent = addZero(minutes);
        secondsEl.textContent = addZero(seconds);
    }

    updateTimer();
    interval = setInterval(updateTimer, 1000);
};

export default timer;