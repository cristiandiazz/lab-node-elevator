class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = 'Up';
    this.waitingList = [];
    this.passengers = [];
  }

  start(passenger) {
    this.interval = setInterval(() => {
      this.update(passenger);
    }, 1000);
  }
  stop() {
    if (this.waitingList.length == 0 && this.floor == 0) {
      clearInterval(this.interval);
    }
  };
  update(passenger) {
    this.log();
  }
  _passengersEnter() {
    if (waitingList.length > 0) {
      this.requests.push(waitingList[0].destinationFloor);
      console.log(waitingList[0].name + " has entered the elevator");
      this.passengers.push(waitingList.shift());
    }
  };
  _passengersLeave() {
    for (var i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].destinationFloor == this.floor) {
        this.passengers.pop(this.passengers[i]);
        console.log(this.passengers.destinationFloor[i].name + " has left the elevator")
      }
    }
  };
  floorUp() {
    this.direction = 'Up';
    this.floor += 1;
  }
  floorDown() {
    this.direction = 'Down';
    this.floor -= 1;
  }

  call(passenger) {
    this.waitingList.push(passenger);
    this.requests.push(passenger);
    this.update();
  }
  log() {
    console.log("Direction: " + this.direction + " , Floor: " + this.floor);
  }
};

module.exports = Elevator;