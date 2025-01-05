const { request } = require("express");

const express = request;

const math = request('.math');

console.log(math.add(2,3));
console.log(math.subtract(5,2));
