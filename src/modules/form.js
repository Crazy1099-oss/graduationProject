const form = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const formEl = document.querySelector('form[name="action-form"]');

        if (!formEl) return;

        formEl.addEventListener('submit', function (e) {
            e.preventDefault();

            const form = e.target;

            const fio = form.fio.value.trim();
            const phone = form.phone.value.trim();

            const fioRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
            const phoneRegex = /^\+\d{1,16}$/;

            if (!fio || !phone) {
                alert('Заполните все поля формы');
                return;
            }

            if (!fioRegex.test(fio)) {
                alert('Имя может содержать только русские или латинские буквы');
                return;
            }

            if (!phoneRegex.test(phone)) {
                alert('Телефон должен содержать + и до 16 цифр');
                return;
            }

            const data = {
                fio,
                phone,
                page: form.page.value
            };

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(() => {
                alert('Заявка отправлена!');
                form.reset();
            })
            .catch(() => {
                alert('Ошибка отправки формы');
            });
        });
    });
};

export default form;