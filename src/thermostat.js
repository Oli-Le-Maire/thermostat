'use strict';

class Thermostat {
  constructor(){
    this.temperature = 20;
  };

  currentTemperature(){
    return this.temperature;
  };

  up(){
    return (this.temperature += 1)
  };
};