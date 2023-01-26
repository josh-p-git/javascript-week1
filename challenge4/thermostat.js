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
        if (this.temperature < this.maxTemp) {
            return this.temperature += 1
        } else {
            return this.temperature
        }
    }

    down() {
        if (this.temperature > this.minTemp) {
            return this.temperature -= 1
        } else {
            return this.temperature
        }
    }

    setPowerSavingMode(mode) {
        if (mode === true) {
            this.maxTemp = 25
        } else if (mode === false) {
            this.maxTemp = 32
        }
    }

    reset() {
        this.temperature = 20;
    }

    energyUsage() {
        if (this.temperature < 19 ) {
            return 'low-usage'
        } else if (this.temperature <= 25) {
            return 'medium-usage'
        } else {
            return 'high-usage'
        }
    }    
};

module.exports = Thermostat;