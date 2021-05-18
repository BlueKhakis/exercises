class ProgressBar {

    constructor(container) {

        this.container = container; // container element that contains
                                    // all the parts of the progress bar

        this.value = 40;

        this.initializeButtons();
    }

    setKnobWidth() {

        const knob = this.container.querySelector('.progress .bar .knob');
        knob.style.width = this.value + '%';

    }

    setCounterValue() {

        const counter = this.container.querySelector('.counter');
        counter.innerHTML = this.value / 10;

    }

    changeValue(amount) {

        // prepare the number that we want
        let indended_value = this.value + amount;

        // limit intended_value to be between 0 and 100
        indended_value = Math.max(0, Math.min(indended_value, 100));

        this.value = indended_value;

        this.setKnobWidth();

        this.setCounterValue();

    }

    initializeButtons() {

        const minus_button = this.container.querySelector('.progress .btn-minus');
        minus_button.addEventListener('click', () => {

            this.changeValue(-10);

        })

        const plus_button = this.container.querySelector('.progress .btn-plus');
        plus_button.addEventListener('click', () => {

            this.changeValue(10);

        })

    }
}