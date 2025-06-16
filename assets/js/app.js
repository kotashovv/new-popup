document.addEventListener('DOMContentLoaded', () => {
    const SELECTORS = {
        animInput: '.anim-input input',
        toggleBtn: '.toglle-booking-form',
        formWrap: '.form-wrap'
    };

    const initElements = (selector, callback) => {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            callback(elements);
        }
    };

    const handleAnimInput = (inputs) => {
        const updateActiveState = (input) => {
            const parent = input.closest('.anim-input');
            parent.classList.toggle('active', input.value.trim() !== '');
        };

        inputs.forEach(input => {
            input.addEventListener('focus', () => input.closest('.anim-input').classList.add('focus'));
            input.addEventListener('blur', () => input.closest('.anim-input').classList.remove('focus'));
            input.addEventListener('input', () => updateActiveState(input));

            updateActiveState(input);
        });
    };

    const toggleForm = () => {
        const forms = document.querySelectorAll(SELECTORS.formWrap);
        if (forms.length !== 2) {
            return;
        }
        forms.forEach(form => form.classList.toggle('active'));
    };

    const initToggleButtons = (buttons) => {
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                toggleForm();
            });
        });
    };

    initElements(SELECTORS.animInput, handleAnimInput);
    initElements(SELECTORS.toggleBtn, initToggleButtons);
});