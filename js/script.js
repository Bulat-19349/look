

// Filter

let name = ["Ivan", "Alex", "Volendemort"];
let shortName = name.filter(function(name){
    return name.length < 5;
});
console.log(item);


Map


let answers = ['IvAn', 'AnnA', 'KSenIya'];

let result = answers.map(item =>{
    return item.toLowerCase();
});
console.log(result);

let some = [4, 'wew', 'qww'];
console.log(some.some(item => {
    return typeof(item) === 'number';
}))

Reduce

let arr = ['Apple', 'Plum', 'Tomat'];

let res = arr.reduce((sum, i) => {
    return `${sum}, ${i}`;
})
console.log(res);

let obj = {
    Ivan: 'persone',
    Anna: 'persone',
    dog: 'animal'
}
let newArr = Object.entries(obj)
.filter(item => {
    return item[1] === 'persone';
}).map(item =>{
    return item[0];
})
console.log(newArr);
localStorage.setItem('number', 5);
console.log(localStorage.getItem('number'));