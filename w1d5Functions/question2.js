"use strict";
exports.areaOfCircle = this.areaOfCircle;
/**
 * 
 * @returns {areaOfCircle}
 * @returns {volumeOfCylinder}
 * process: calculates volume of a cyliner 
 * and area of a cirlce with user inputs
 */
function questionTwo() {
  const prompt = require("prompt-sync")();
  const radiusOfCircle = +prompt("Enter the radius of the circle: ");
  const heightOfCylinder = +prompt("Enter the height of the cylinder: ");
  const radiusOfCylinder = +prompt("Enter radius of cyliner: ");


  /**
   * @param {number} height from user
   * @param {number} radius from user
   * @returns {volume} 
   * process: calculates volume of a cylinder
   */
  function volumeOfCylinder(height, radius) {
    const volume = areaOfCircle(radius) * height;
    return volume;
  }

  /**
   * @param {number} radius from user
   * @returns {number} area of circle
   * process: calculates area of a cirlce
   */
  function areaOfCircle(radius) {
    const area = Math.PI * Math.sqrt(radius);
    return area;
  }

  
return areaOfCircle(radiusOfCircle), volumeOfCylinder(heightOfCylinder, radiusOfCylinder);
}

questionTwo();


