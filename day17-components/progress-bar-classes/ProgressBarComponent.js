class ProgressBar {

    constructor(container) {

        this.container = container; // container element that contains
                                    // all the parts of the progress bar

        this.value = 40;

        this.mount();
    }


    /**
     * prepare the code for displaying
     * of the component
     *
     * returns an element that can be mounted
     * into the page
     */
    render() {

        let html =
        `<div class="progress-bar">
            <div class="label">
                <span class="counter">4</span>/<span class="maximum">10</span>
            </div>
            <div class="progress">
                <div class="btn-minus"></div>
                <div class="bar">
                    <div class="knob"></div>
                </div>
                <div class="btn-plus"></div>
            </div>
        </div>`;

        const div = document.createElement('div');
        div.innerHTML = html;

        // get the progress bar element as an object
        this.progress_bar = div.firstChild;

        // activate the buttons within this progress bar
        this.initializeButtons();

        return this.progress_bar;
    }

    /**
     * insert the component into the page
     */
    mount() {

        // get the element to display
        const element = this.render();

        // mount it into the page
        this.container.appendChild(element);

        // make an update to reflect current values
        this.update();
    }

    /**
     * updates the component when anything
     * changes
     */
    update() {

        this.setKnobWidth();
        this.setCounterValue();

    }










    setKnobWidth() {

        const knob = this.progress_bar.querySelector('.progress .bar .knob');
        knob.style.width = this.value + '%';

    }

    setCounterValue() {

        const counter = this.progress_bar.querySelector('.counter');
        counter.innerHTML = this.value / 10;

    }

    changeValue(amount) {

        // prepare the number that we want
        let indended_value = this.value + amount;

        // limit intended_value to be between 0 and 100
        indended_value = Math.max(0, Math.min(indended_value, 100));

        this.value = indended_value;

        // update the component
        this.update();

    }

    initializeButtons() {

        const minus_button = this.progress_bar.querySelector('.progress .btn-minus');
        minus_button.addEventListener('click', () => {

            this.changeValue(-10);

        })

        const plus_button = this.progress_bar.querySelector('.progress .btn-plus');
        plus_button.addEventListener('click', () => {

            this.changeValue(10);

        })

    }
}