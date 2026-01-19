const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional argument
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
    console.log(`Data received! User: ${name} User-id: ${id}`);
})

customEmitter.on('response', () => {
    console.log(`some other logic received`);
})

customEmitter.emit('response', 'john', 34)

