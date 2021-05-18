class Page {
    constructor() {
        this.title = null;
        this.language = 'en';
        this.layout = 'standard';
    }

    render() {
        if (this.layout === 'standard') {
            this.displayMenu();
            this.displayMain();
            this.displayFooter();
        }
    }
}


class Menu {
    constructor() {
        this.menu_items = [];
    }

    menuItemWasClicked() {

    }
}



class MenuItem {
    constructor() {
        this.label = '';
        this.visited = false;
    }
}