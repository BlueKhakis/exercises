export default class Counter {

    constructor(value, container) {
        this.value = value;
        this.max_value = 10;

        this.mount(container);
    }

    render() {
        let html =
        `<div class="label">
            <span class="counter">${this.value/10}</span>/<span class="maximum">${this.max_value}</span>
        </div>`;

        const div = document.createElement('div');
        div.innerHTML = html;

        // get the progress bar element as an object
        this.counter = div.firstChild;

        return this.counter;
    }

    mount(container) {
        const element = this.render();
        container.appendChild(element);
        this.update();
    }

    update() {

        this.counter.querySelector('.counter').innerHTML = this.value / 10;

        this.counter.querySelector('.maximum').innerHTML = this.max_value;

    }

    setValue(value) {
        this.value = value;

        this.update();
    }

}