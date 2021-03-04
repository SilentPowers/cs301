"use strict";

/**
 * process: Calculates total house volume
 *@returns{number} Returns total house volume
 */
function questionThree() {
  const prompt = require("prompt-sync")();
  const depth = +prompt("Enter depth: ");
  const width = +prompt("Enter width: ");
  const height = +prompt("Enter height: ");
  const sweep = +prompt("Enter sweep: ");


/**
 * Calculates the area of specified triangle
 * @param {number} aaa side 1
 * @param {number} bbb side 2
 * @param {number} ccc side 3
 * @returns {number} calculated area of triangle
 */
function triangleArea(aaa, bbb, ccc) {
  let s = (aaa + bbb + ccc) / 2;
  s = s * ((s - aaa) * (s - bbb) * (s - ccc));
  const calcArea = Math.sqrt(s);
  return calcArea;
}

/**
 * 
 * @param {number} sweep 1 
 * @param {number} width 2
 * @param {number} depth 3
 * @returns {number} Calls triangle area and returns it
 */
function roofVolume(sweep, width, depth) {
  const triA = triangleArea(sweep, sweep, width) * depth;
  return triA;
}

/**
 * 
 * @param {number} width 1
 * @param {number} height 2
 * @param {number} depth 3
 * @returns {number} sums parameters
 */
function livingVolume(width, height, depth) {
  const total = width * height * depth;
  return total;
}

/**
 * 
 * @param {number} width 1
 * @param {number} depth 2
 * @param {number} height 3
 * @param {number} sweep 4
 * @returns{livVolume} gets living volume 
 * @returns{roVolume} gets roof volume
 */
function houseVolume(width, depth, height, sweep) {
  const livVolume = livingVolume(width, height, depth);
  const roVolume = roofVolume(sweep, width, depth);
  return livVolume + roVolume;
}
return houseVolume(width, depth, height, sweep);

}
questionThree();