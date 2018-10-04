// Random number between 0 and max-1
var max = 10;
var random_number = Math.floor(Math.random() * max);

console.log(random_number);

// Random number bewtween 1 and max
max = 10;
random_number = Math.floor(Math.random() * max) + 1;

console.log(random_number);

// Random number between mix and max
var min = 5;
max = 10;
random_number = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(random_number);