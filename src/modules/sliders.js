const debounce = (fn, delay = 100) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}

const createSlider = ({
    itemsSelector,
    leftBtnSelector,
    rightBtnSelector,
    visibleCountFn,
    getElement = (item) => item,
}) => {
    const items = document.querySelectorAll(itemsSelector)
    const btnLeft = document.querySelector(leftBtnSelector)
    const btnRight = document.querySelector(rightBtnSelector)

    let index = 0

    const update = () => {
        const visibleCount = visibleCountFn()
        const maxIndex = Math.max(0, items.length - visibleCount)

        if (index > maxIndex) index = maxIndex

        items.forEach((item, i) => {
            const el = getElement(item)
            el.classList.toggle(
                "item-hidden",
                !(i >= index && i < index + visibleCount)
            )
        })
    }

    btnRight?.addEventListener("click", () => {
        const maxIndex = items.length - visibleCountFn()
        if (index < maxIndex) index++
        update()
    })

    btnLeft?.addEventListener("click", () => {
        if (index > 0) index--
        update()
    })

    window.addEventListener("resize", debounce(update, 100))

    update()
}

const sliders = () => {
    createSlider({
        itemsSelector: ".benefits__item",
        leftBtnSelector: ".benefits__arrow--left",
        rightBtnSelector: ".benefits__arrow--right",
        visibleCountFn: () => (window.innerWidth < 576 ? 1 : 3),
    })

    createSlider({
        itemsSelector: ".service-block",
        leftBtnSelector: ".services__arrow--left",
        rightBtnSelector: ".services__arrow--right",
        visibleCountFn: () => (window.innerWidth < 576 ? 1 : 2),
        getElement: (item) => item.closest(".col-md-12"),
    })
}

export default sliders