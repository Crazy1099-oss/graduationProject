const modal = () => {
    const btn = document.querySelector('.col-sm-12.col-lg-6 .btn-warning')
    const modalWindow = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')
    const btnClose = document.querySelector('.header-modal__close')

    const btnCloseService = document.querySelector('.services-modal__close')
    const modalServiceBtns = document.querySelectorAll('.service-button')
    const modalWindowService = document.querySelector('.services-modal')

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
        modalWindowService.style.opacity = '0'

        setTimeout(() => {
            modalWindow.style.display = 'none'
            overlay.style.display = 'none'
        }, 300)
    }

    const openModalService = () => {
        modalWindowService.style.display = 'block'
        overlay.style.display = 'block'

        requestAnimationFrame(() => {
            modalWindowService.style.opacity = '1'
            overlay.style.opacity = '1'
        })
    }

    const closeModalService = () => {
        modalWindowService.style.opacity = '0'
        overlay.style.opacity = '0'

        setTimeout(() => {
            modalWindowService.style.display = 'none'
            overlay.style.display = 'none'
        }, 300)
    }

    btn.addEventListener('click', openModal)

    if (btnClose) {
        btnClose.addEventListener('click', closeModal)
    }

    if (overlay) {
        overlay.addEventListener('click', closeModal)
    }

    modalServiceBtns.forEach(btn => {
        btn.addEventListener('click', openModalService)
    })

    if (btnCloseService) {
        btnCloseService.addEventListener('click', closeModalService)
    }
}

export default modal