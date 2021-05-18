class Messages {

}

Messages.next_message = 0;

Messages.appendMessage = (message) => {

    const container = document.querySelector('.conversation');

    // container.innerHTML = container.innerHTML + '<div class="message">Message</div>';
    container.innerHTML += `
        <div class="message side--${message.side} name--${message.name}">
            <div class="message__text">
                ${message.text}
            </div>
        </div>`;
}





let filtered_conversation = conversation.filter(message => {

    return message.side === 'remote';

    // same as above
    if (message.side === 'remote') {
        return true;
    } else {
        return false;
    }

})

console.log(filtered_conversation);

let local_messages = conversation.filter(message => message.side === 'local');
let remote_messages = conversation.filter(message => message.side === 'remote');

console.log(local_messages);
console.log(remote_messages);

const interval_id = setInterval(() => {

    Messages.appendMessage(conversation[Messages.next_message]);

    next_message++;

    if (conversation.length <= next_message) {
        clearInterval(interval_id);
    }

}, 500);



// conversation.forEach(message => {

//     appendMessage(message);

// })





