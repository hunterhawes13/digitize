

function digitize(n) {
 var digit = n.toString().split("").sort().map(function(v, i) { return parseInt(v);
                                                         });
return digit;
}                                                          

console.assert(digitize(123)[0] === 1);
console.assert(digitize(8675309)[6] === 9);