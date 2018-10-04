var pets = ['cat', 'dog', 'rat'];

for (var i = 0; i < 3; i++) {
    pets[i] = pets[i] + 's';
}
console.log(pets);

// Alternatively

var pets2 = ['cat', 'dog', 'rat'];

for (animal in pets2) {
    pets2[animal] += 's';
}

console.log(pets2);