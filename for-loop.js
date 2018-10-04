var total = 0;
var limit = 10;

for (var i = 0; i < limit; i++) {
    total += i;
}
console.log(total);

//Alternatively, a while loop

total = 0;
limit = 10;
var i = 0;

while (i < limit) {
    total += i;
    i++;
}
console.log(total);