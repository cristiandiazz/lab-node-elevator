const Elevator = require('./elevator.js');

const Person = require('./person.js');

let elevator = new Elevator();
let passenger = new Person('Cristian', 4, 3);

elevator.start(passenger);
elevator.call(passenger);