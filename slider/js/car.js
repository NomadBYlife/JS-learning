var car1 = {
    name: 'reno stepway',
    isTurnOn: false,
    speed: 0,
    engine: {
        v: 1.6,
        horsesPower: 110
    },
    start: function () {
        this.isTurnOn = true;
        this.speed = 10;
    }
}

