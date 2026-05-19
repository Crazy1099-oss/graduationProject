const modal = () => {
    const btn = document.querySelector('.col-sm-12.col-lg-6 .btn-warning')
    const modalWindow = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')
    const btnClose = document.querySelector('.header-modal__close')

    modalWindow.style.opacity = '0'
    overlay.style.opacity = '0'
    overlay.style.transition = 'opacity 0.3s ease'

    const openModal = () => {
        modalWindow.style.display = 'block'
        overlay.style.display = 'block'

        requestAnimationFrame(() => {
            modalWindow.style.opacity = '1'

            overlay.style.opacity = '1'
        })
    }

    const closeModal = () => {
        modalWindow.style.opacity = '0'
        overlay.style.opacity = '0'

        setTimeout(() => {
            modalWindow.style.display = 'none'
            overlay.style.display = 'none'
        }, 300)
    }

    btn.addEventListener('click', openModal)
    btnClose.addEventListener('click', closeModal)
    overlay.addEventListener('click', closeModal)
}

export default modal