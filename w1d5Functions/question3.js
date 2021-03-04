"use strict";

/**
 * process: Calculates total house volume
 *@returns{houseVolume} Returns total house volume
 */
function questionThree() {
  const prompt = require("prompt-sync")();
  const depth = +prompt("Enter depth: ");
  const width = +prompt("Enter width: ");
  const height = +prompt("Enter height: ");
  const sweep = +prompt("Enter sweep: ");


/**
 * Calculates the area of specified triangle
 * @param {aaa} aaa side 1
 * @param {bbb} bbb side 2
 * @param {ccc} ccc side 3
 * @returns {calcArea} calculated area
 */
function triangleArea(aaa, bbb, ccc) {
  let s = (aaa + bbb + ccc) / 2;
  s = s * ((s - aaa) * (s - bbb) * (s - ccc));
  const calcArea = Math.sqrt(s);
  return calcArea;
}

/**
 * 
 * @param {sweep} sweep 1 
 * @param {width} width 2
 * @param {depth} depth 3
 * @returns {triA} Calls triangle area and returns it
 */
function roofVolume(sweep, width, depth) {
  const triA = triangleArea(sweep, sweep, width) * depth;
  return triA;
}

/**
 * 
 * @param {width} width 1
 * @param {height} height 2
 * @param {depth} depth 3
 * @returns {total} sums parameters
 */
function livingVolume(width, height, depth) {
  const total = width * height * depth;
  return total;
}

/**
 * 
 * @param {width} width 1
 * @param {depth} depth 2
 * @param {height} height 3
 * @param {sweep} sweep 4
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