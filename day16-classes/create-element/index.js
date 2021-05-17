
const list = document.querySelector('.list');

const button = document.querySelector('.add-item-button');


const elementFromHTML = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.firstChild;
}


let item_nr = 0;

// button.addEventListener('click', () => {

//     item_nr++;

//     list.innerHTML += `<li class="item-${item_nr}">Item ${item_nr}</li>`;

//     //                                        .list .item-1
//     const list_item = document.querySelector('.list .item-' + item_nr);


//     list_item.addEventListener('click', () => {
//         console.log(list_item.innerText);
//     })

// })

button.addEventListener('click', () => {

    item_nr++;

    const li = document.createElement('li');

    li.classList.add(`item-${item_nr}`);

    li.innerText = `Item ${item_nr}`;

    li.addEventListener('click', () => {
        console.log(li.innerText);
    })

    console.log(li);

    const a = document.createElement('a');

    a.setAttribute("href", '#');

    a.classList.add('item__link');

    a.innerText = 'Link text';

    li.appendChild(a);

    list.appendChild(li);

    li.classList.add('inserted');

})


document.querySelector('.remove-item-button').addEventListener('click', () => {

    // find the last li in the first list
    const last_li = document.querySelector('.list li:last-child');

    // remove it from the document
    list.removeChild(last_li);

})


document.querySelector('.move-item-button').addEventListener('click', () => {

    // find the last li in the first list
    // const last_li = document.querySelector('.item-'+item_nr);
    const last_li = document.querySelector('.list li:last-child');

    // append it to the second list
    document.querySelector('.list-2').appendChild(last_li);

})


document.querySelector('.copy-item-button').addEventListener('click', () => {

    // find the last li in the first list
    const last_li = document.querySelector('.list li:last-child');

    const copy = last_li.cloneNode(true);

    console.log(copy);

    document.querySelector('.list-2').appendChild(copy);

})


document.querySelector('.create-item-button').addEventListener('click', () => {

    let html = `<li class="some-class">
            Item created with elementFromHTML
            <a href="#">Link</a>
            <div>
                <span></span>
            </div>
        </li>
    `;

    const li = elementFromHTML(html);
    li.addEventListener('click', () => {
        console.log('Complex element clicked');
    })

    console.log(li);

    document.querySelector('.list').appendChild(li);

});