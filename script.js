"use strict";
// // let b = 10;
// // function onAdd(n1:number,n2:number){
// //     let a = 10;
// // }
// // function compare(n1:number,n2:number){
// //     if(n1 > n2){
// //         return n1;
// //     } else {
// //         return n2;
// //     }
// // }
// let a = 10;
// let b = 20;
// let c = a + b;
// for (let i = 0; i < 5;++i) {
//     console.log(i);
// }
// console.log(c);
// console.log("Welcome to TypeScript - Strictly on data type - Updated");
function compare(n1, n2) {
    if (n1 > n2) {
        console.log("n1 is greater");
    }
    else {
        console.log("n2 is greater");
    }
}
// compare(1,2);
function concat(s1, s2) {
    console.log(s1 + " " + s2);
}
// concat("Hi","Sachin");
let registered = 1 < 2; //  This wont throw an error since output of 1 < 2 is boolean.
// console.log(registered);
// let n : bigint  = 9007199254740992n;
// SYMBOL IN TYPESCRIPT
// let s1 = Symbol("key1");
// let s2 = Symbol("key1");
// console.log(s1 === s2);
// TS ASSIGNMENT : implicit vs explicit
let n = 10; // Explicit type assignment
let a = 20; // Implicit type assignment
let num; // TS automatically declares "num" as "any" datatype if it is uninitialized..
num = 10;
num = "Sachin";
num = true;
let c = "123" + 4;
console.log(typeof (c));
//# sourceMappingURL=script.js.map