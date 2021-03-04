"use strict";

/**
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
   * @param {height} height from user
   * @param {radius} radius from user
   * @returns {volume} 
   * process: calculates volume of a cylinder
   */
  function volumeOfCylinder(height, radius) {
    const volume = areaOfCircle(radius) * height;
    return volume;
  }

  /**
   * @param {radius} radius from user
   * @returns {area}
   * process: calculates area of a cirlce
   */
  function areaOfCircle(radius) {
    const area = Math.PI * Math.sqrt(radius);
    return area;
  }

  
return areaOfCircle(radiusOfCircle), volumeOfCylinder(heightOfCylinder, radiusOfCylinder);
}

questionTwo();


