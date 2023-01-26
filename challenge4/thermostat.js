class Thermostat {
    constructor(temperature, minTemp, maxTemp) {
        this.temperature = 20;
        this.minTemp = 10;
        this.maxTemp = 25;
    }

    getTemperature() {
        return this.temperature;
    }
};

temp = new Thermostat;
console.log(temp.getTemperature());