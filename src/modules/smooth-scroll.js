const scroll = () => {
    const scrollBtn = document.querySelector('.smooth-scroll');
    const firstSection = document.querySelector('.container');

    window.addEventListener('scroll', () => {
        const firstSectionBottom = firstSection.offsetTop + firstSection.offsetHeight;

        if (window.scrollY > firstSectionBottom) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    })

    // Плавный скролл наверх
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}
export default scroll