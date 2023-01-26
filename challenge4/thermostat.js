class Thermostat {
    constructor(temperature, minTemp, maxTemp) {
        this.temperature = 20;
        this.minTemp = 10;
        this.maxTemp = 25;
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        return this.temperature += 1
    }

    down() {
        return this.temperature -= 1
    }
};

module.exports = Thermostat;

/*temp = new Thermostat();
console.log(temp.getTemperature());
console.log(temp.up());
console.log(temp.down());*/