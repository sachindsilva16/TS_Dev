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
//# sourceMappingURL=script.js.map



function compare(n1, n2) {

    console.log(typeof(n1));
    console.log(typeof(n2));

    if(typeof(n1) === "number" && typeof(n2) === "number"){
        if (n1 > n2) {
            console.log("n1 is greater than n2");
        } else {
    
            console.log("n2 is greater than n1");
        }
    } else {
        console.log("Invalid input");
    }
}

compare(2,"1");