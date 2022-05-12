console.log('This is tutorial 60');

let a, b;
[a, b] = [100, 200];
// console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

({a, b, c, ...d} = {a : 45, b : 65, c : 100, d : 200, e:20, f:78});
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// ARRAY DE-STRUCTURING📌
const fruits = ["mango", "bananas", "orange"];
[a, b, c] = fruits;
console.log(a);
console.log(b);
console.log(c);

// OBJECT DE-STRUCTURING📌
const laptop ={
    model : "hp Privilion",
    age : "23 days",
    gender: "male",
    net : 1212,
    start : function (){console.log("started");}
}

const {model, age, gender, net, start} = laptop;
console.log(model);
console.log(age);
console.log(gender);
console.log(net);
console.log(start);

start();