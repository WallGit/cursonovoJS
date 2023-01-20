const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("2as"));
console.log(nottoaz.test("dsadsafasdsafasdfqweqwfasd"));

const az = /[a-z]/;

console.log(nottoaz.test("adsafga2312asfsafas"));
