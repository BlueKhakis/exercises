export default class Navigation {

    constructor(container, items) {
        this.container = container;
        this.items = items;

        this.mount();
    }

    render() {
        let elements = [];

        this.items.forEach(item => {
            elements.push(this.renderItem(item));
        })

        return elements;
    }

    mount() {
        const elements = this.render();
        elements.forEach(element => this.container.appendChild(element));
        this.update();
    }

    update() {
        // nothing to do here, the menu does not update
    }


    renderItem(item) {
        const div = document.createElement('div');
        div.innerHTML =
            `<a class="navigation__item" href="${item.url}">
                <div class="navigation__label">
                    ${item.name}
                </div>
            </a>`;

        const link = div.firstChild;

        // if this item has sub-items
        if (item.items) {

            // create a wrapper for the submenu
            const submenu = document.createElement('div');
            submenu.classList.add('navigation__submenu', 'submenu');

            // generate an item for each of the submenu items and append them to the submenu
            item.items.forEach(submenu_item => submenu.appendChild(this.renderItem(submenu_item)));

            // append the submenu to this menu item
            link.appendChild(submenu);

            // create the expand button
            const button = document.createElement('button');
            button.innerHTML = '+';

            // activate the expand button
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                event.preventDefault();

                link.classList.toggle('navigation__item--open');

                button.innerHTML = link.classList.contains('navigation__item--open') ? '-' : '+';
            })

            // append the expand button to the link
            link.querySelector('.navigation__label').appendChild(button);
        }

        return link;
    }
}