let input = document.getElementById("input");
let output = document.getElementById("output");

function run() {
  try {
    output.innerText = eval(input.innerText);
  } catch (e) {
    output.innerText = e;
  }
}

// New functions:

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// ------------------------------------------

// Math library functions/constants mapping:

const PI = Math.PI;
const E = Math.E;

function pow(base, exponent) {
  return Math.pow(base, exponent);
}

function sqrt(num) {
  return Math.sqrt(num);
}

function abs(num) {
  return Math.abs(num);
}

function log(num) {
  return Math.log(num);
}

function log2(num) {
  return Math.log2(num);
}

function log10(num) {
  return Math.log10(num);
}

function sin(angle) {
  return Math.sin(angle);
}

function cos(angle) {
  return Math.cos(angle);
}

function tan(angle) {
  return Math.tan(angle);
}

function arcsin(num) {
  return Math.asin(num);
}

function arccos(num) {
  return Math.acos(num);
}

function arctan(num) {
  return Math.atan(num);
}

// ------------------------------------------
