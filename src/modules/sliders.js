const sliders = () => {
    const items = document.querySelectorAll('.benefits__item')
    const btnLeft = document.querySelector('.benefits__arrow--left')
    const btnRight = document.querySelector('.benefits__arrow--right')

    let index = 0

    const getVisibleCount = () => {
        return window.innerWidth < 576 ? 1 : 3
    };

    const update = () => {
        const visibleCount = getVisibleCount()

        const maxIndex = Math.max(0, items.length - visibleCount)
        if (index > maxIndex) index = maxIndex

        items.forEach((item, i) => {
            if (i >= index && i < index + visibleCount) {
                item.classList.remove("item-hidden");
            } else {
                item.classList.add("item-hidden")
            }
        });
    };

    btnRight.addEventListener('click', () => {
        const visibleCount = getVisibleCount()
        const maxIndex = items.length - visibleCount

        if (index < maxIndex) {
            index++;
        }

        update();
    });

    btnLeft.addEventListener('click', () => {
        if (index > 0) {
            index--
        }

        update()
    })

    window.addEventListener('resize', update)

    update()
}

export default sliders