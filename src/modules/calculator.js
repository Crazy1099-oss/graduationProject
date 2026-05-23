const calculator = () => {
    document.addEventListener('DOMContentLoaded', () => {

        const type = document.getElementById('calc-type');
        const material = document.getElementById('calc-type-material');
        const input = document.getElementById('calc-input');
        const total = document.getElementById('calc-total');

        if (!type || !material || !input || !total) return;

        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\d.]/g, '');
            calc();
        });

        type.addEventListener('change', calc);
        material.addEventListener('change', calc);

        function calc() {
            const area = parseFloat(input.value) || 0;
            const typeVal = parseFloat(type.value) || 0;
            const materialVal = parseFloat(material.value) || 0;

            const result = area * typeVal * materialVal;

            total.value = result ? result.toFixed(2) : '';
        }
    });
};

export default calculator;