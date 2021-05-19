import transforms from "./transforms";

export default class App {

    constructor(box, transforms) {

        this.box = box;
        this.transforms = transforms;

        this.mount();
    }

    render() {
        let buttons = [];

        // reset button
        const reset_button = this.createButton('reset', () => {
            this.resetTransformations();
        });
        reset_button.classList.add('button--reset');
        buttons.push(reset_button);

        // create a button from each of the transformations
        this.transforms.forEach(transform => {
            buttons.push(this.createButton(transform, () => {
                this.applyTransformation(transform);
            }));
        })

        this.transforms.forEach(transform => {
            const prepend_button = this.createButton(transform, () => {
                this.prependTransformation(transform);
            });
            prepend_button.classList.add('button--prepend');
            buttons.push(prepend_button);
        })

        return buttons;
    }


    mount() {
        const buttons = this.render();

        const controls = document.querySelector('.controls');

        buttons.forEach(button => controls.appendChild(button));
    }

    createButton(text, action) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.classList.add('button');
        button.addEventListener('click', action);

        return button;
    }

    resetTransformations() {
        this.box.style.transform = 'none';
    }

    applyTransformation(transform) {
        if (this.box.style.transform === 'none') {
            this.box.style.transform = '';
        }

        this.box.style.transform += ` ${transform}`;
    }

    prependTransformation(transform) {
        if (this.box.style.transform === 'none') {
            this.box.style.transform = '';
        }

        this.box.style.transform = transform + ` ${this.box.style.transform}`;
    }

}