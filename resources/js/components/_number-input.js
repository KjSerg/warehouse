export const numberInput = () => {
    const inputs = document.querySelectorAll('.number-input');
    inputs.forEach(function (input) {
        input.addEventListener('input', function (event) {
            input.value = input.value.replace(/[^0-9.-]/g, '');
            if ((input.value.match(/\./g) || []).length > 1) {
                input.value = input.value.replace(/\.(?=[^.]*$)/, '');
            }
            if (input.value.indexOf('-') > 0) {
                input.value = input.value.replace('-', '');
            }
        });
    });
    $(document).on('click', '.number-input-button', function (e) {
        e.preventDefault();
        const $t = $(this);
        const isPlus = $t.hasClass('plus');
        const $input = $t.closest('.form-label-container').find('input');
        let step = $input.attr('data-step') || $input.attr('step') || 0.1;
        let min = $input.attr('data-min') || $input.attr('min');
        let max = $input.attr('data-max') || $input.attr('max');
        let value = $input.val() || 0;
        value = Number(value);
        value = isNaN(value) ? 0 : value;
        step = Number(step);
        step = isNaN(step) ? 0.1 : step;
        if (isPlus) {
            value = value + step;
        } else {
            value = value - step;
        }
        if (max) {
            max = Number(max);
            if (!isNaN(max)) {
                value = value > max ? max : value;
            }
        }
        if (min) {
            min = Number(min);
            if (!isNaN(min)) {
                value = value < min ? min : value;
            }
        }
        value = value.toFixed(2);
        $input.val(value);
    });
}