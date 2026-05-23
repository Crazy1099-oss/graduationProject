const sertificateDocument = () => {
    const items = document.querySelectorAll('.sertificate-document');
    const modal = document.querySelector('#documentModal');
    const modalImg = document.querySelector('#documentModalImg');
    const overlay = document.querySelector('.document-modal__overlay');
    const focusItems = document.querySelectorAll('.document-overlay');

    if (!modal || !modalImg || !overlay) return;

    items.forEach((item) => {

        item.addEventListener('mouseenter', () => {
            const overlay = item.querySelector('.document-overlay');
            if (overlay) overlay.style.opacity = '1';
        });

        item.addEventListener('mouseleave', () => {
            const overlay = item.querySelector('.document-overlay');
            if (overlay) overlay.style.opacity = '0';
        });

        // click отдельно
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const src = item.getAttribute('href');
            if (!src) return;

            modalImg.src = src;
            modal.classList.add('active');
        });
    });

    overlay?.addEventListener('click', () => {
        modal.classList.remove('active');
        modalImg.src = '';
    });
};

export default sertificateDocument;